// Import the necessary modules
import { connectDatabase } from "../../db/connections/websiteVisitsCounter_CONNECTION";

export default async function handler(req, res) {
  try {
    // Capture the client's IP address
    const CLIENT_IP =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress;

    // Checking if the IP is not localhost (127.0.0.1) and not ::1 (localhost as well)
    const ON_LOCALHOST = CLIENT_IP !== "127.0.0.1" && CLIENT_IP !== "::1";

    // Check the User-Agent header to filter out unwanted traffic
    const userAgent = req.headers["user-agent"];
    const isRealUserAgent = checkUserAgent(userAgent);

    // Connect to the database
    const DB = await connectDatabase();

    if (!DB) {
      res.status(500).json({ error: "Failed to connect to MongoDB" });
      return;
    }

    // Only proceed if not on localhost and the User-Agent is valid
    if (ON_LOCALHOST && isRealUserAgent) {
      // Insert the IP only if it doesn't exist
      await DB.collection("ips").findOneAndUpdate(
        { ip: CLIENT_IP },
        {
          $setOnInsert: { ip: CLIENT_IP, createdAt: new Date() },
        },
        { upsert: true }
      );
    }

    // Identify and store duplicate IPs
    const duplicateIPs = await DB.collection("ips")
      .aggregate([
        {
          $group: {
            _id: "$ip",
            count: { $sum: 1 },
            docs: { $push: "$_id" },
          },
        },
        {
          $match: {
            count: { $gt: 1 },
          },
        },
      ])
      .toArray();

    // Remove all but the first occurrence of each duplicate
    duplicateIPs.forEach(async (duplicate) => {
      const [firstDoc, ...restDocs] = duplicate.docs;
      await DB.collection("ips").deleteMany({ _id: { $in: restDocs } });
    });

    // Removing the entries that have EXCLUDED_IPS values
    const EXCLUDED_IPS = ["127.0.0.1", "::1"];
    await DB.collection("ips").deleteMany({ ip: { $in: EXCLUDED_IPS } });

    const ALL_UNIQUE_IPS = await DB.collection("ips").find().toArray();

    res.json(ALL_UNIQUE_IPS);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

function checkUserAgent(userAgent) {
  // Define a list of valid user agents
  const VALID_USER_AGENTS = ["Mozilla", "Chrome", "Safari", "Firefox", "Edge"];

  // Check if the User-Agent matches any of the valid user agents
  return VALID_USER_AGENTS.some((ua) => userAgent.includes(ua));
}
