/**
 *
 *  This is the Index Add Media
 *
 */

import { useState } from "react";
import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAddMedia = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null); // State to hold the selected file

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("type", type);
      formData.append("text", text);
      formData.append("file", file); // Append the selected file

      const response = await fetch("/api/getImagesAndVideos", {
        method: "POST",
        body: formData, // Send FormData instead of JSON
      });

      if (response.ok) {
        console.log("Media submitted successfully!");

        setName("");
        setType("");
        setText("");
        setFile(null); // Reset file state after submission
      } else {
        console.error("Failed to submit media..");
      }
    } catch (error) {
      console.error("Error submitting media:", error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <section id="indexAddMedia" className={`${styles.index_add_media}`}>
      <form onSubmit={handleSubmit}>
        <input
          id="addMediaName"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          id="addMediaType"
          type="text"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Enter Type"
        />
        <input
          id="addMediaText"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Media Text"
        />
        <input
          id="addMediaFile"
          type="file"
          accept="image/*, video/*"
          onChange={handleFileChange}
        />
        <button type="submit">Add To DB</button>
      </form>
    </section>
  );
};
