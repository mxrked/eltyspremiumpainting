// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports
import { BsStarFill } from "react-icons/bs";

// Data/Functions/Images Imports
// import { connectDatabase } from "@/db/connections/websiteVisitsCounter_CONNECTION";
import { FadeLeft } from "@/assets/animations/components/FadeLeft";
import { FadeRight } from "@/assets/animations/components/FadeRight";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { BackToTop } from "@/assets/components/global/All/BackToTop";
import { Footer } from "@/assets/components/global/Footer/Footer";
import { SubmissionSuccessMessage } from "@/assets/components/global/All/SubmissionSuccessMessage";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";
import { LoginToggler } from "@/assets/components/global/All/LoginToggler";
import { LoginWindow } from "@/assets/components/global/All/LoginWindow";
import { CurrentUser } from "@/assets/components/global/All/CurrentUser";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout";
import { IndexAd } from "@/assets/components/pages/Index/IndexAd";
import { IndexReviews } from "@/assets/components/pages/Index/IndexReviews";
import { IndexGallery } from "@/assets/components/pages/Index/IndexGallery";
// import { IndexGalleryImgModal } from "@/assets/components/pages/Index/IndexGalleryImgModal";
// import { IndexGalleryVideoModal } from "@/assets/components/pages/Index/IndexGalleryVideoModal";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";
import { IndexGeneratedReviews } from "@/assets/components/pages/Index/IndexGeneratedReviews";

// Style Imports
import styles from "../assets/styles/modules/Index/Index.module.css";
import "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps({ req }) {
  try {
    // Database activities
    // const DB = await connectDatabase();

    // if (!DB) {
    //   return {
    //     props: {
    //       // TOTAL_NUMBER_OF_IPS: 0,
    //       // current_ip: null,
    //       iconData: null,
    //       reviewsData: null,
    //       galleryData: null,
    //       adData: null,
    //     },
    //   };
    // }

    // const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    // const current_ip = req.socket.remoteAddress;

    const pageHeadDatafilePath = path.join(
      process.cwd(),
      "public/data/",
      "PageHeadIconsData.json"
    );
    const pageHeadDatafileContents = fs.readFileSync(
      pageHeadDatafilePath,
      "utf-8"
    );

    // console.log("Icons Data: " + pageHeadDatafileContents);

    const iconData = JSON.parse(pageHeadDatafileContents);
    // console.log("Icons Data: " + iconData);

    // const reviewsDataFilePath = path.join(
    //   process.cwd(),
    //   "public/data/",
    //   "ReviewsData.json"
    // );
    // const reviewsDataFileContents = fs.readFileSync(
    //   reviewsDataFilePath,
    //   "utf-8"
    // );

    //! SWITCH TO HAVE ADDED REVIEWS
    const reviewsDataFilePath = path.join(
      process.cwd(),
      "public/data/",
      "GeneratedReviews.json"
    );
    const reviewsDataFileContents = fs.readFileSync(
      reviewsDataFilePath,
      "utf-8"
    );

    // console.log("Reviews Data: " + reviewsDataFileContents);

    const reviewsData = JSON.parse(reviewsDataFileContents);
    // console.log("Reviews Data: " + reviewsData);

    const galleryDataFilePath = path.join(
      process.cwd(),
      "public/data/",
      "IndexGalleryData.json"
    );
    const galleryDataFileContents = fs.readFileSync(
      galleryDataFilePath,
      "utf-8"
    );

    // console.log("Reviews Data: " + galleryDataFileContents);

    const galleryData = JSON.parse(galleryDataFileContents);
    // console.log("Gallery Data: " + galleryData);

    const adDataFilePath = path.join(
      process.cwd(),
      "public/data/",
      "AdData.json"
    );
    const adDataFileContents = fs.readFileSync(adDataFilePath, "utf-8");

    const adData = JSON.parse(adDataFileContents);
    // console.log("Ad Data: " + adData)

    return {
      props: {
        // TOTAL_NUMBER_OF_IPS,
        // current_ip,
        iconData,
        reviewsData,
        galleryData,
        adData,
      },
    };
  } catch (error) {
    console.error("Error reading icon data:", error);

    return {
      props: {
        // TOTAL_NUMBER_OF_IPS: 0,
        // current_ip: null,
        iconData: null,
        reviewsData: null,
        galleryData: null,
        adData: null,
      },
    };
  }
}

export default function Home({
  // TOTAL_NUMBER_OF_IPS,
  // current_ip,
  iconData,
  reviewsData,
  galleryData,
  adData,
}) {
  const router = useRouter();

  const [ON_LOCAL_HOST, SET_ON_LOCALHOST] = useState(null);

  // useEffect(() => {
  //   console.log(iconData.favicon);

  //   reviewsData.forEach((review) => {
  //     console.log(review);
  //   });

  //   galleryData.forEach((gallery) => {
  //     console.log(gallery);
  //   });
  // }, []);

  // Displaying the submission form success message if sent
  useEffect(() => {
    if (sessionStorage.getItem("Submission Sent")) {
      document.getElementById("submissionSuccessMessage").style.display =
        "flex";
      document
        .getElementById("submissionSuccessMessage")
        .querySelector("button").style.pointerEvents = "auto";

      document.getElementById("submissionSuccessMessage").style.opacity = 1;
      document.getElementById("submissionSuccessMessage").style.visibility =
        "visible";

      setTimeout(() => {
        document.getElementById("submissionSuccessMessage").style.opacity = 0;
        document.getElementById("submissionSuccessMessage").style.visibility =
          "hidden";
        document
          .getElementById("submissionSuccessMessage")
          .querySelector("button").style.pointerEvents = "none";
      }, 7000);
    }
  }, []);

  //! DB Activities
  // Checking if connected to DB
  // console.log("Total number of website visits: " + TOTAL_NUMBER_OF_IPS);

  // // Triggering getWebsiteVisitsByIps.js
  // useEffect(() => {
  //   // Fetching the api route
  //   const FETCH_DATA = async () => {
  //     try {
  //       const response = await fetch("/api/getWebsiteVisitsByIps");
  //       const data = await response.json();

  //       // Handle the data
  //       console.log("API response: " + data);
  //     } catch (error) {
  //       console.error("Error fetching data: " + error);
  //     }
  //   };

  //   FETCH_DATA();
  // }, []);

  // Displaying the current website visits when on localhost
  // useEffect(() => {
  //   const IPS = ["127.0.0.1", "::1"];

  //   if (current_ip === IPS[0] || current_ip === IPS[1]) {
  //     SET_ON_LOCALHOST(true);
  //   }
  // }, []);

  //! EVERYTHING RELATED TO REVIEWS
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

        // router.reload();
      } else {
        console.error("Failed to fetch reviews");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    // Call the fetchReviews function when component mounts
    fetchReviews();
  }, []);

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
    <div id="PAGE" className="page index-page">
      <PageHead page_head_data={iconData} />
      <BackToTop />
      {/**
      <IndexGalleryImgModal />
      <IndexGalleryVideoModal />
      */}

      <SubmissionSuccessMessage />
      <PaymentRequiredWall />
      <CurrentUser />

      <main id="PAGE_CNT" className={`${styles.page_cnt} page-cnt`}>
        {/**
        {ON_LOCAL_HOST && (
          <div
            id="websitesVisitCounter"
            style={{
              padding: "15px",
              fontFamily: "sans-serif",
              backgroundColor: "#e3e3e3",
              textAlign: "center",
            }}
          >
            <span>
              Total number of website visits:{" "}
              <span
                id="websitesVisitCounterIndicator"
                style={{ fontWeight: "bold", marginLeft: "10px" }}
              >
                {" "}
                {TOTAL_NUMBER_OF_IPS}{" "}
              </span>
            </span>
          </div>
        )}
        */}

        <NavTop />
        <DesktopNav />
        <MobileNav />

        <LoginToggler />
        <LoginWindow />

        <IndexTop />
        <FadeRight threshold={0.5}>
          <IndexAbout />
        </FadeRight>
        <FadeLeft threshold={0.5}>
          <IndexAd adData={adData} />
        </FadeLeft>
        {/*
        <FadeRight threshold={0.5}>
          <IndexReviews reviewsData={reviewsData} />
        </FadeRight>
        **/}

        <FadeLeft threshold={0.5}>
          <IndexGeneratedReviews reviews={reviews} />

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
        </FadeLeft>

        {/*
        <div>
          <h2>Reviews</h2>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>
                  <div>
                    <span>
                      Name: <strong>{review.name}</strong>
                    </span>
                    <br />
                    <span>
                      Location: <strong>{review.location}, NC</strong>
                    </span>
                    <br />
                    <span>
                      Date: <strong>{review.date}</strong>
                    </span>
                    <br />
                    <ul>
                      {Array.from({ length: review.rating }, (_, index) => (
                        <li key={index}>
                          <BsStarFill />
                        </li>
                      ))}
                    </ul>
                    <br />
                    <span>Img: {review.img}</span>
                    <br />
                    <span>Review:</span>
                    <p>{review.review}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available</p>
          )}

          <h2>Submit a Review</h2>
          <form onSubmit={handleReviewSubmit}>
            <div>
              <span>Enter your name:</span>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <span>Enter your NC city:</span>
              <input
                type="text"
                placeholder="Your City"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <span>Enter your rating:</span>
              <div>
                <input
                  type={"number"}
                  min={1}
                  max={5}
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />{" "}
                <span>Stars</span>
              </div>
            </div>

            <div>
              <span>Enter your review:</span>
              <textarea
                placeholder="Write your review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </div>
        **/}

        <FadeLeft threshold={0.5}>
          {/** */} <IndexGallery galleryData={galleryData} />
        </FadeLeft>
        <FadeRight threshold={0.5}>
          <IndexContact />
        </FadeRight>
      </main>

      <Footer />
    </div>
  );
}
