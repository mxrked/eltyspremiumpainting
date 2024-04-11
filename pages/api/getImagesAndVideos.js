import multer from "multer";
import fs from "fs";
import { MongoClient } from "mongodb";

const upload = multer({ dest: "uploads/" }); // Define multer upload middleware

async function connectToDatabase() {
  const client = new MongoClient(
    "mongodb+srv://admin:eltyspremiumpainting_IAV_020700@images-and-videos.nwb0f1c.mongodb.net/?retryWrites=true&w=majority&appName=images-and-videos",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  await client.connect();
  return client.db("images-and-videos-DB").collection("images-and-videos");
}

export const config = {
  api: {
    bodyParser: false, // Disables automatic parsing of the request body
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Use multer middleware to handle file upload
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error("Error uploading file:", err);
        res.status(500).json({ error: "Failed to upload file" });
        return;
      }

      const { _id, itemID, name, type, text } = req.body;
      const file = req.file;

      if (!file) {
        console.error("No file uploaded");
        res.status(400).json({ error: "No file uploaded" });
        return;
      }

      const collection = await connectToDatabase();

      try {
        const fileData = fs.readFileSync(file.path); // Read file data
        const src = `data:${type};base64,${fileData.toString("base64")}`; // Convert file data to base64

        await collection.insertOne({ _id, itemID, name, type, src, text });

        res.status(200).json({ message: "Media item submitted successfully!" });
      } catch (error) {
        console.error("Error saving media item to database: ", error);
        res.status(500).json({ error: "Failed to save media item." });
      } finally {
        // Remove uploaded file after processing
        fs.unlinkSync(file.path);
      }
    });
  } else if (req.method === "DELETE") {
    const { itemID } = req.query;
    if (!itemID) {
      return res.status(400).json({ error: "itemID parameter is required" });
    }
    const collection = await connectToDatabase();
    const result = await collection.deleteOne({ itemID: itemID });
    if (result.deletedCount === 1) {
      const mediaItems = await collection.find().toArray();
      return res
        .status(200)
        .json({ mediaItems, message: "Media item deleted successfully!" });
    } else {
      return res.status(404).json({ error: "Media item not found.." });
    }
  } else if (req.method === "GET") {
    try {
      const collection = await connectToDatabase();
      const mediaItems = await collection.find().toArray();
      res.status(200).json(mediaItems);
    } catch (error) {
      console.error("Error retrieving media items from database:", error);
      res.status(500).json({ error: "Failed to retrieve media items" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
