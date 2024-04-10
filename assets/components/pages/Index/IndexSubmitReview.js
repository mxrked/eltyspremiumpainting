/**
 *
 *  This is the Index Submit Review
 *
 */

import { useEffect, useState } from "react";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexSubmitReview = () => {
  const CURRENT_DATE = new Date();
  const MONTH = CURRENT_DATE.getMonth() + 1;
  const DAY = CURRENT_DATE.getDate();
  const YEAR = CURRENT_DATE.getFullYear();
  const FORMATTED_DATE = MONTH + "/" + DAY + "/" + YEAR;

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [img, setImg] = useState(
    "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"
  );
  const [date, setDate] = useState(FORMATTED_DATE);
  const [location, setLocation] = useState("");
  const [reviews, setReviews] = useState([]);

  // Function to fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/getReviews");
      if (response.ok) {
        const data = await response.json();
        setReviews(data); // Set the reviews state with fetched data

        window.location.reload();
      } else {
        console.error("Failed to fetch reviews");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
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

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const NAME = document.getElementById("reviewFormName");
    const LOCATION = document.getElementById("reviewFormLocation");
    const RATING = document.getElementById("reviewFormRating");
    const MESSAGE = document.getElementById("reviewFormMessage");

    const CHECKING_NAME = checkingForValidInput(NAME);
    const CHECKING_LOCATION = checkingForValidInput(LOCATION);
    const CHECKING_RATING = checkingForValidInput(RATING);
    const CHECKING_MESSAGE = checkingForValidInput(MESSAGE);

    if (
      CHECKING_NAME &&
      CHECKING_LOCATION &&
      CHECKING_RATING &&
      CHECKING_MESSAGE
    ) {
      try {
        const response = await fetch("/api/getReviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, rating, img, date, location, review }),
        });

        if (response.ok) {
          console.log("Review submitted successfully");
          // Reset form fields after successful submission
          setName("");
          setRating("");
          setImg(
            "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png"
          );
          setDate(FORMATTED_DATE);
          setLocation("");
          setReview("");
          // Fetch reviews again after submission to update the list
          fetchReviews();

          router.reload();
        } else {
          console.error("Failed to submit review");
        }
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    } else {
      if (!CHECKING_NAME) {
        NAME.style.border = "2px solid red";
      }

      if (!CHECKING_LOCATION) {
        LOCATION.style.border = "2px solid red";
      }

      if (!CHECKING_RATING) {
        RATING.style.border = "2px solid red";
      }

      if (!CHECKING_MESSAGE) {
        MESSAGE.style.border = "2px solid red";
      }
    }
  };

  return (
    <div className={`${styles.index_generated_reviews_form}`}>
      <h2>Submit a Review</h2>
      <form
        onSubmit={handleReviewSubmit}
        onReset={() => {
          document.querySelectorAll(".form-field").forEach((field) => {
            field.style.border = "2px solid white";
            field.value = "";

            setName("");
            setLocation("");
            setRating("");
            setReview("");
          });
        }}
      >
        <div className={`${styles.form_set}`}>
          <span>Enter your name:</span>
          <input
            className="form-field"
            id="reviewFormName"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              e.currentTarget.style.border = "2px solid white";
              setName(e.target.value);
            }}
          />
        </div>

        <div className={`${styles.form_set}`}>
          <span>Enter your NC city:</span>
          <input
            className="form-field"
            id="reviewFormLocation"
            type="text"
            placeholder="Your City"
            value={location}
            onChange={(e) => {
              e.currentTarget.style.border = "2px solid white";
              setLocation(e.target.value);
            }}
          />
        </div>

        <div className={`${styles.form_set}`}>
          <span>Enter your rating:</span>
          <div>
            <input
              className="form-field"
              id="reviewFormRating"
              placeholder="1"
              type={"number"}
              min={1}
              max={5}
              value={rating}
              onChange={(e) => {
                e.currentTarget.style.border = "2px solid white";
                setRating(e.target.value);
              }}
            />{" "}
            <span>Stars</span>
          </div>
        </div>

        <div className={`${styles.form_set}`}>
          <span>Enter your review:</span>
          <textarea
            className="form-field"
            id="reviewFormMessage"
            placeholder="Write your review..."
            value={review}
            onChange={(e) => {
              e.currentTarget.style.border = "2px solid white";
              setReview(e.target.value);
            }}
          />
        </div>

        <div className={`${styles.form_btns}`}>
          <button
            type="reset"
            className={`${styles.reset_btn} orientation-change-element half-second`}
          >
            Reset
          </button>
          <button
            type="submit"
            className={`${styles.submit_btn} orientation-change-element half-second`}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
