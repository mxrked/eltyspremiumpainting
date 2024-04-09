/**
 *
 *  This is used to get reviews
 *
 */
// import fs from "fs";
// import path from "path";

// const REVIEWS_FILE_PATH = path.resolve(
//   process.cwd(),
//   "public",
//   "data",
//   "GeneratedReviews.json"
// );

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, rating, review } = req.body;

//     // Read the current reviews from file
//     let reviews = [];
//     try {
//       reviews = JSON.parse(fs.readFileSync(REVIEWS_FILE_PATH, "utf-8"));
//     } catch (error) {
//       console.error("Error reading reviews file:", error);
//       return res.status(500).json({ error: "Failed to read reviews file" });
//     }

//     // Add new review
//     reviews.push({ name, rating, review });

//     // Write updated reviews to file
//     try {
//       fs.writeFileSync(REVIEWS_FILE_PATH, JSON.stringify(reviews, null, 2));
//       return res
//         .status(200)
//         .json({ message: "Review submitted successfully!" });
//     } catch (error) {
//       console.error("Error writing reviews file:", error);
//       return res.status(500).json({ error: "Failed to save review" });
//     }
//   } else if (req.method === "GET") {
//     // Return existing reviews
//     try {
//       const reviewsData = fs.readFileSync(REVIEWS_FILE_PATH, "utf8");
//       const reviews = JSON.parse(reviewsData);
//       return res.status(200).json(reviews);
//     } catch (error) {
//       console.error("Error reading reviews file:", error);
//       return res.status(500).json({ error: "Failed to retrieve reviews" });
//     }
//   } else {
//     return res.status(405).json({ error: "Method Not Allowed" });
//   }
// }

// Example using MongoDB as a database
import { MongoClient } from "mongodb";

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(
      "mongodb+srv://admin:eltyspremiumpainting_SR_020700@reviews.0zazg9o.mongodb.net/?retryWrites=true&w=majority&appName=reviews",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    await client.connect();
  }
  return client.db("site-reviews").collection("reviews");
}

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, rating, img, date, location, review } = req.body;
      const collection = await connectToDatabase();
      await collection.insertOne({ name, rating, img, date, location, review });
      return res
        .status(200)
        .json({ message: "Review submitted successfully!" });
    } else if (req.method === "GET") {
      const collection = await connectToDatabase();
      const reviews = await collection.find().toArray();
      return res.status(200).json(reviews);
    } else if (req.method === "DELETE") {
      const { name } = req.query;
      if (!name) {
        return res.status(400).json({ error: "Name parameter is required" });
      }
      const collection = await connectToDatabase();
      const result = await collection.deleteOne({ name: name });
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
