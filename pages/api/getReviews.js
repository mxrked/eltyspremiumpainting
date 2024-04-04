/**
 *
 *  This is used to get reviews
 *
 */

import fs from "fs";
import path from "path";

const REVIEWS_FILE_PATH = path.resolve(
  process.cwd(),
  "public",
  "data",
  "GeneratedReviews.json"
);

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, rating, review } = req.body;

    // Read the current reviews from file
    let reviews = [];
    try {
      reviews = JSON.parse(fs.readFileSync(REVIEWS_FILE_PATH, "utf-8"));
    } catch (error) {
      console.error("Error reading reviews file:", error);
    }

    // Add new review
    reviews.push({ name, rating, review });

    // Write updated reviews to file
    try {
      fs.writeFileSync(REVIEWS_FILE_PATH, JSON.stringify(reviews, null, 2));
    } catch (error) {
      console.error("Error writing reviews file:", error);
      return res.status(500).json({ error: "Failed to save review" });
    }

    return res.status(200).json({ message: "Review submitted successfully!" });
  } else if (req.method === "GET") {
    // Return existing reviews
    let reviews = [];

    try {
      reviews = JSON.parse(fs.readFileSync(REVIEWS_FILE_PATH, "utf8"));
    } catch (error) {
      console.error("Error reading reviews file:", error);
      return res.status(500).json({ error: "Failed to retrieve reviews" });
    }

    return res.status(200).json(reviews);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
