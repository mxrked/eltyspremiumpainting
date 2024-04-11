/**
 *
 *  This is the IndexGeneratedMedia
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexGeneratedMedia = (props) => {
  const getColumnClasses = (index, totalColumns) => {
    const isOddNumber = totalColumns % 2 !== 0;

    if (isOddNumber && index === totalColumns - 1) {
      return "col-lg-6 col-md-6 col-sm-6 col-xs-12 offset-lg-3"; // Center the last column if odd number of columns
    } else {
      return "col-lg-6 col-md-6 col-sm-6 col-xs-12"; // Your existing classes for two columns
    }
  };

  const deleteMedia = async (itemID) => {
    try {
      // // axios.delete(`/api/getReviews?id=${id}`);
      const RESPONSE = await fetch(`/api/getImagesAndVideos?itemID=${itemID}`, {
        method: "DELETE",
      });

      if (RESPONSE.ok) {
        console.log("Media deleted successfully!");
        document.location.reload();
      } else {
        console.error("Failed to delete media:", RESPONSE.statusText);
      }
    } catch (error) {
      console.error("Error deleting media:", error);
    }
  };

  return (
    <section
      id="indexGeneratedMedia"
      className={`${styles.index_generated_media}`}
    >
      <div className={`${styles.index_generated_media_inner}`}>
        <div className={`${styles.index_generated_media_inner_top}`}>
          <h3
            id="indexGallery_JUMPPOINT"
            className="orientation-change-element half-second"
          >
            Gallery:
          </h3>
          <h2 className="orientation-change-element half-second">
            Our Stunning Work
          </h2>

          <p className="orientation-change-element half-second">
            Explore the quality and craftsmanship of Elty's Premium Painting &
            Restoration in our gallery. From painting to sheetrock installation,
            our projects reflect our commitment to excellence. Find inspiration
            for your next project as you browse through our portfolio. At Elty's
            Premium Painting & Restoration, we take pride in our work and are
            excited to share the success stories of satisfied clients in Mt.
            Airy and Greensboro. Dive into our gallery and envision the
            possibilities for your own space.
          </p>
        </div>

        <div className={`${styles.media_box} container-fluid`}>
          <div className={`${styles.media_row} row`}>
            {props.mediaItems.map((media, index) => (
              <div
                className={`${styles.media} ${getColumnClasses(
                  index,
                  props.mediaItems.length
                )}`}
              >
                {media.type === "image" && <LazyLoadImage src={media.src} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
