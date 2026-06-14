import { MongoClient } from "mongodb";

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.REVIEWS_DRIVER, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
  }
  return client.db("site-reviews").collection("reviews");
}

export default async function handler(req, res) {
  let collection;
  try {
    collection = await connectToDatabase();
    if (req.method === "POST") {
      const { itemID, name, rating, img, date, location, review, type } =
        req.body;
      await collection.insertOne({
        itemID,
        name,
        rating,
        img,
        date,
        location,
        review,
        type,
      });
      return res
        .status(200)
        .json({ message: "Review submitted successfully!" });
    } else if (req.method === "GET") {
      const reviews = await collection.find().toArray();
      return res.status(200).json(reviews);
    } else if (req.method === "DELETE") {
      const { itemID } = req.query;
      if (!itemID) {
        return res.status(400).json({ error: "itemID parameter is required" });
      }
      const result = await collection.deleteOne({ itemID: itemID });
      if (result.deletedCount === 1) {
        const reviews = await collection.find().toArray();
        return res
          .status(200)
          .json({ reviews, message: "Review deleted successfully!" });
      } else {
        return res.status(404).json({ error: "Review not found.." });
      }
    } else {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error handling request:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Close the MongoDB connection after handling the request
    if (client) {
      await client.close();
      client = null; // Reset the client after closing the connection
    }
  }
}
