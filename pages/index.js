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

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout";
import { IndexGallery } from "@/assets/components/pages/Index/IndexGallery";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";

// Style Imports
import styles from "../assets/styles/modules/Index/Index.module.css";
import "../assets/styles/modules/Index/Index.module.css";
import { IndexYelpReviews } from "@/assets/components/pages/Index/IndexYelpReviews";

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
    const iconData = JSON.parse(pageHeadDatafileContents);

    const yelpDataFilePath = path.join(
      process.cwd(),
      "public/data/",
      "YelpReviewsData.json"
    );
    const yelpDataFileContents = fs.readFileSync(yelpDataFilePath, "utf8");
    const yelpData = JSON.parse(yelpDataFileContents);

    return {
      props: {
        iconData,
        yelpData,
      },
    };
  } catch (error) {
    console.error("Error reading icon data:", error);

    return {
      props: {
        iconData: null,
        yelpData: null,
      },
    };
  }
}

export default function Home({ iconData, yelpData }) {
  const router = useRouter();

  useEffect(() => {
    console.log(iconData.favicon);

    yelpData.forEach((review) => {
      console.log(review);
    });
  }, []);

  return (
    <div id="PAGE" className="page index-page">
      <PageHead page_head_data={iconData} />

      <main id="PAGE_CNT" className={`${styles.page_cnt} page-cnt`}>
        <NavTop />
        <DesktopNav />
        <MobileNav />

        <IndexTop />
        <FadeRight threshold={0.5}>
          <IndexAbout />
        </FadeRight>
        <FadeLeft threshold={0.5}>
          <IndexYelpReviews />
        </FadeLeft>
        <FadeRight threshold={0.5}>
          <IndexGallery />
        </FadeRight>
        <FadeLeft threshold={0.5}>
          <IndexContact />
        </FadeLeft>
      </main>
    </div>
  );
}
