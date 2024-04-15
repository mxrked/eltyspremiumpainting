/**
 *
 *  This is the Index Add Media
 *
 */

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
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    fetchMediaItems();
  }, []);

  const fetchMediaItems = async () => {
    try {
      const response = await fetch("/api/getImagesAndVideos");

      if (response.ok) {
        const data = await response.json();
        setMediaItems(data);
      } else {
        console.error("Failed to fetch media items.");
      }
    } catch (error) {
      console.error("Error fetching media items:", error);
    }
  };

  const checkingForValidInput = (input) => {
    if (
      input.value !== "" &&
      input.value !== null &&
      input.value.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkingFileType = (file) => {
    if (file.value !== "" && file.value !== null && file.value.length !== 0) {
      const FILE_NAME = file.value.split("\\").pop().split("/").pop();
      const FILE_EXTENSION = FILE_NAME.split(".").pop().toLowerCase();

      const IMG_EXTENSIONS = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "webp",
        "avif",
      ];
      // const VIDEO_EXTENSIONS = ["mp4", "avi", "mov", "mkv", "wmv"];

      if (IMG_EXTENSIONS.includes(FILE_EXTENSION)) {
        console.log("File is an image!");
        return "image";
      }
      // else if (VIDEO_EXTENSIONS.includes(FILE_EXTENSION)) {
      //   console.log("File is a video!");
      //   return "video";
      // }
      else {
        // console.log("File is not a video or image..");
        console.log("File is not a image..");
        return false;
      }
    } else {
      console.log("No file is selected..");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const NAME = document.getElementById("addMediaName");
    const TYPE = document.getElementById("addMediaType");
    const TEXT = document.getElementById("addMediaText");
    const FILE = document.getElementById("addMediaFile");

    const CHECKING_NAME = checkingForValidInput(NAME);
    const CHECKING_TYPE = checkingForValidInput(TYPE);
    const CHECKING_TEXT = checkingForValidInput(TEXT);
    const CHECKING_FILE = checkingFileType(FILE);

    let type = TYPE.value.trim().toLowerCase(); // Get the type input value and normalize it

    // If the user didn't manually enter "image" or "video", detect the file type
    // if (!["image", "video"].includes(type)) {
    //   type = CHECKING_FILE;
    // }

    if (!["image"].includes(type)) {
      type = CHECKING_FILE;
    }

    if (CHECKING_NAME && CHECKING_TYPE && CHECKING_TEXT && CHECKING_FILE) {
      try {
        const formData = new FormData();
        // formData.append("_id", null);
        formData.append("itemID", itemID);
        formData.append("name", NAME.value);
        formData.append("type", type);
        formData.append("text", TEXT.value);
        formData.append("file", FILE.files[0]); // Append the selected file

        const response = await fetch("/api/getImagesAndVideos", {
          method: "POST",
          body: formData, // Send FormData instead of JSON
        });

        if (response.ok) {
          console.log("Media submitted successfully!");

          setItemID("ID_" + Math.random().toString(36).substring(2, 10));
          NAME.value = "";
          TYPE.value = "";
          TEXT.value = "";
          FILE.value = null; // Reset file input after submission

          window.location.reload();

          // fetchMediaItems();
        } else {
          console.error("Failed to submit media..");
        }
      } catch (error) {
        console.error("Error submitting media:", error);
      }
    } else {
      if (!CHECKING_NAME) {
        NAME.style.border = "2px solid red";
      }
      if (!CHECKING_TYPE) {
        TYPE.style.border = "2px solid red";
      }
      if (!CHECKING_TEXT) {
        TEXT.style.border = "2px solid red";
      }
      if (!CHECKING_FILE) {
        FILE.style.border = "2px solid red";
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    e.currentTarget.style.border = "2px solid white";
  };

  return (
    <section id="indexAddMedia" className={`${styles.index_add_media}`}>
      <div className={`${styles.index_add_media_inner}`}>
        <h2 className="orientation-change-element half-second">
          Add A Gallery Item
        </h2>

        <form
          onSubmit={handleSubmit}
          onReset={(e) => {
            const NAME = document.getElementById("addMediaName");
            const TYPE = document.getElementById("addMediaType");
            const TEXT = document.getElementById("addMediaText");
            const FILE = document.getElementById("addMediaFile");

            setItemID("ID_" + Math.random().toString(36).substring(2, 10));
            setName("");
            setType("");
            setText("");
            setFile(null);

            NAME.style.borderColor = "white";
            TYPE.style.borderColor = "white";
            TEXT.style.borderColor = "white";
            FILE.style.borderColor = "white";
          }}
        >
          <div className={`${styles.form_set}`}>
            <span className="orientation-change-element half-second">
              Enter Name:
            </span>
            <input
              id="addMediaName"
              type="text"
              name="name"
              value={name}
              placeholder="Media Name"
              onChange={(e) => {
                e.currentTarget.style.border = "2px solid white";
                setName(e.target.value);
              }}
              // placeholder="Enter Name"
            />
          </div>
          <div className={`${styles.form_set}`}>
            <span className="orientation-change-element half-second">
              Enter Type <strong>(Images Only)</strong>:
            </span>

            <input
              id="addMediaType"
              type="text"
              name="type"
              value={type}
              placeholder="Media Type"
              onChange={(e) => {
                e.currentTarget.style.border = "2px solid white";
                setType(e.target.value);
              }}
              // placeholder="Enter Type"
            />
          </div>
          <div className={`${styles.form_set}`}>
            <span className="orientation-change-element half-second">
              Enter Modal Text:
            </span>
            <input
              id="addMediaText"
              type="text"
              name="text"
              value={text}
              placeholder="Modal Text"
              onChange={(e) => {
                e.currentTarget.style.border = "2px solid white";
                setText(e.target.value);
              }}
              // placeholder="Enter Media Text"
            />
          </div>
          <div className={`${styles.form_set}`}>
            <span className="orientation-change-element half-second">
              Add File (Only images and videos):
            </span>
            <input
              id="addMediaFile"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className={`${styles.form_btns}`}>
            <button
              type="reset"
              className={`${styles.reset_btn} orientation-change-element half-second`}
            >
              Clear
            </button>
            <button
              type="submit"
              className={`${styles.submit_btn} orientation-change-element half-second`}
            >
              Add To Gallery
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
