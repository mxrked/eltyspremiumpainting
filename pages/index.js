// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { connectDatabase } from "@/db/connections/websiteVisitsCounter_CONNECTION";
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

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout";
import { IndexAd } from "@/assets/components/pages/Index/IndexAd";
import { IndexReviews } from "@/assets/components/pages/Index/IndexReviews";
import { IndexGallery } from "@/assets/components/pages/Index/IndexGallery";
// import { IndexGalleryImgModal } from "@/assets/components/pages/Index/IndexGalleryImgModal";
// import { IndexGalleryVideoModal } from "@/assets/components/pages/Index/IndexGalleryVideoModal";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";

// Style Imports
import styles from "../assets/styles/modules/Index/Index.module.css";
import "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps({ req }) {
  try {
    // Database activities
    const DB = await connectDatabase();

    if (!DB) {
      return {
        props: {
          TOTAL_NUMBER_OF_IPS: 0,
          current_ip: null,
          iconData: null,
          reviewsData: null,
          galleryData: null,
          adData: null,
        },
      };
    }

    const TOTAL_NUMBER_OF_IPS = await DB.collection("ips").countDocuments();

    const current_ip = req.socket.remoteAddress;

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

    const reviewsDataFilePath = path.join(
      process.cwd(),
      "public/data/",
      "ReviewsData.json"
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
        TOTAL_NUMBER_OF_IPS,
        current_ip,
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
        TOTAL_NUMBER_OF_IPS: 0,
        current_ip: null,
        iconData: null,
        reviewsData: null,
        galleryData: null,
        adData: null,
      },
    };
  }
}

export default function Home({
  TOTAL_NUMBER_OF_IPS,
  current_ip,
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
  console.log("Total number of website visits: " + TOTAL_NUMBER_OF_IPS);

  // Triggering getWebsiteVisitsByIps.js
  useEffect(() => {
    // Fetching the api route
    const FETCH_DATA = async () => {
      try {
        const response = await fetch("/api/getWebsiteVisitsByIps");
        const data = await response.json();

        // Handle the data
        console.log("API response: " + data);
      } catch (error) {
        console.error("Error fetching data: " + error);
      }
    };

    FETCH_DATA();
  }, []);

  // Displaying the current website visits when on localhost
  useEffect(() => {
    const IPS = ["127.0.0.1", "::1"];

    if (current_ip === IPS[0] || current_ip === IPS[1]) {
      SET_ON_LOCALHOST(true);
    }
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

      <main id="PAGE_CNT" className={`${styles.page_cnt} page-cnt`}>
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

        <NavTop />
        <DesktopNav />
        <MobileNav />

        <IndexTop />
        <FadeRight threshold={0.5}>
          <IndexAbout />
        </FadeRight>
        <FadeLeft threshold={0.5}>
          <IndexAd adData={adData} />
        </FadeLeft>
        <FadeRight threshold={0.5}>
          <IndexReviews reviewsData={reviewsData} />
        </FadeRight>
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
