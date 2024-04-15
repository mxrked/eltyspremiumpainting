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
import { LoginCloser } from "@/assets/components/global/All/LoginCloser";
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
// import { IndexAddMedia } from "@/assets/components/pages/Index/old/IndexAddMedia";
import { IndexAddMedia } from "@/assets/components/pages/Index/IndexAddMedia";
import { IndexGeneratedMedia } from "@/assets/components/pages/Index/IndexGeneratedMedia";
import { IndexSubmitReview } from "@/assets/components/pages/Index/IndexSubmitReview";

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

  const [adminMode, setAdminMode] = useState(false);
  const [ON_LOCAL_HOST, SET_ON_LOCALHOST] = useState(null);

  // Setting adminMode
  useEffect(() => {
    const CURRENT_USER = localStorage.getItem("Current User");
    setTimeout(() => {
      setAdminMode(CURRENT_USER ? true : false);

      if (CURRENT_USER) {
        document.querySelectorAll(".review-delete").forEach((rd) => {
          rd.style.opacity = 1;
          rd.style.visibility = "visible";
        });

        document.querySelectorAll(".media-delete").forEach((md) => {
          md.style.opacity = 1;
          md.style.visibility = "visible";
        });
      }
    }, 1800);
  }, []);

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
  useEffect(() => {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    SET_ON_LOCALHOST(isLocalhost);
  }, []);

  //! EVERYTHING RELATED TO REVIEWS
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

  //! EVERYTHING RELATED TO MEDIA ITEMS
  const [mediaItems, setMediaItems] = useState([]);

  // Function to fetch mediaItems
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

  useEffect(() => {
    // Call the fetchMediaItems function when component mounts
    fetchMediaItems();

    // setTimeout(() => {
    //   mediaItems.forEach((item) => {
    //     console.log(item.name);
    //   });
    // }, 600);
  }, []);

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

      {adminMode && <CurrentUser />}

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

        {!adminMode && <LoginToggler />}
        {!adminMode && <LoginCloser />}
        {!adminMode && <LoginWindow />}

        <IndexTop />
        <FadeRight threshold={0.5}>
          <IndexAbout />
        </FadeRight>
        <FadeLeft threshold={0.5}>
          <IndexAd adData={adData} />
        </FadeLeft>

        <FadeRight threshold={0.5}>
          <IndexGeneratedReviews reviews={reviews} adminMode={adminMode} />
          <IndexSubmitReview />
        </FadeRight>

        <FadeLeft threshold={0.5}>
          <IndexGallery galleryData={galleryData} />
          {adminMode && <IndexAddMedia />}
          {ON_LOCAL_HOST && <IndexGeneratedMedia mediaItems={mediaItems} />}

          {/**
          <IndexGeneratedMedia mediaItems={mediaItems} adminMode={adminMode} />
          {adminMode && <IndexAddMedia />}  */}
        </FadeLeft>

        <FadeRight threshold={0.5}>
          <IndexContact />
        </FadeRight>
      </main>

      <Footer />
    </div>
  );
}
