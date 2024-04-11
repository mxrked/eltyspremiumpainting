import { useState, useEffect } from "react";
import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAddMedia = () => {
  const [itemID, setItemID] = useState(
    "ID_" + Math.random().toString(36).substring(2, 10)
  );
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null); // State to hold the selected file

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("itemID", itemID);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("text", text);
    formData.append("file", file);

    try {
      const response = await fetch("/api/getImagesAndVideos", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Media submitted successfully!");

        setItemID("ID_" + Math.random().toString(36).substring(2, 10));
        setName("");
        setType("");
        setText("");
        setFile(null);
      } else {
        console.error("Failed to submit media..");
      }
    } catch (error) {
      console.error("Error submitting media:", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <section id="indexAddMedia" className={`${styles.index_add_media}`}>
      <div className={`${styles.index_add_media_inner}`}>
        <h2 className="orientation-change-element half-second">
          Add A Gallery Item
        </h2>

        <form onSubmit={handleSubmit}>
          <div className={`${styles.form_set}`}>
            <span className="orientation-change-element half-second">
              Enter Name:
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={`${styles.form_set}`}>
            <span className="orientation-change-element half-second">
              Enter Type (Image OR Video):
            </span>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className={`${styles.form_set}`}>
            <span className="orientation-change-element half-second">
              Enter Modal Text:
            </span>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className={`${styles.form_set}`}>
            <span className="orientation-change-element half-second">
              Add File (Only images and videos):
            </span>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
          </div>

          <div className={`${styles.form_btns}`}>
            <button
              type="reset"
              className={`${styles.reset} orientation-change-element half-second`}
            >
              Clear
            </button>
            <button
              type="submit"
              className={`${styles.submit} orientation-change-element half-second`}
            >
              Add To Gallery
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
