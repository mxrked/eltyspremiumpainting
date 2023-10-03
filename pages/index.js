// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { FadeLeft } from "@/assets/animations/components/FadeLeft";
import { FadeRight } from "@/assets/animations/components/FadeRight";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { BackToTop } from "@/assets/components/global/All/BackToTop";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout";
import { IndexReviews } from "@/assets/components/pages/Index/IndexReviews";
import { IndexGallery } from "@/assets/components/pages/Index/IndexGallery";
import { IndexGalleryImgModal } from "@/assets/components/pages/Index/IndexGalleryImgModal";
import { IndexGalleryVideoModal } from "@/assets/components/pages/Index/IndexGalleryVideoModal";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";

// Style Imports
import styles from "../assets/styles/modules/Index/Index.module.css";
import "../assets/styles/modules/Index/Index.module.css";

export async function getStaticProps() {
  try {
    const pageHeadDatafilePath = path.join(
      process.cwd(),
      "public/data/",
      "PageHeadIconsData.json"
    );
    const pageHeadDatafileContents = fs.readFileSync(
      pageHeadDatafilePath,
      "utf8"
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
      "utf8"
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
      "utf8"
    );

    // console.log("Reviews Data: " + galleryDataFileContents);

    const galleryData = JSON.parse(galleryDataFileContents);
    // console.log("Gallery Data: " + galleryData);

    return {
      props: {
        iconData,
        reviewsData,
        galleryData,
      },
    };
  } catch (error) {
    console.error("Error reading icon data:", error);

    return {
      props: {
        iconData: null,
        reviewsData: null,
        galleryData: null,
      },
    };
  }
}

export default function Home({ iconData, reviewsData, galleryData }) {
  const router = useRouter();

  useEffect(() => {
    console.log(iconData.favicon);

    reviewsData.forEach((review) => {
      console.log(review);
    });

    galleryData.forEach((gallery) => {
      console.log(gallery);
    });
  }, []);

  return (
    <div id="PAGE" className="page index-page">
      <PageHead page_head_data={iconData} />
      <BackToTop />
      <IndexGalleryImgModal />
      <IndexGalleryVideoModal />

      <main id="PAGE_CNT" className={`${styles.page_cnt} page-cnt`}>
        <NavTop />
        <DesktopNav />
        <MobileNav />

        <IndexTop />
        <FadeRight threshold={0.5}>
          <IndexAbout />
        </FadeRight>
        <FadeLeft threshold={0.5}>
          <IndexReviews reviewsData={reviewsData} />
        </FadeLeft>
        <FadeRight threshold={0.5}>
          <IndexGallery galleryData={galleryData} />
        </FadeRight>
        <FadeLeft threshold={0.5}>
          <IndexContact />
        </FadeLeft>
      </main>
    </div>
  );
}
