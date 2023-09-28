// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import { FadeLeft } from "@/assets/animations/components/FadeLeft";
import { FadeRight } from "@/assets/animations/components/FadeRight";
import { FadeDown } from "@/assets/animations/components/FadeDown";

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
import "../assets/styles/modules/Index/Index.module.css";
import { FadeUp } from "@/assets/animations/components/FadeUp";

export async function getStaticProps() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public/data/",
      "PageHeadIconsData.json"
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    const iconData = JSON.parse(fileContents);

    return {
      props: {
        iconData,
      },
    };
  } catch (error) {
    console.error("Error reading icon data:", error);

    return {
      props: {
        iconData: null,
      },
    };
  }
}

export default function Home({ iconData }) {
  const router = useRouter();

  useEffect(() => {
    console.log(iconData.favicon);
  }, []);

  return (
    <div id="PAGE" className="page index-page">
      <PageHead page_head_data={iconData} />

      <main id="PAGE_CNT" className="page-cnt">
        <NavTop />
        <DesktopNav />
        <MobileNav />

        <IndexTop />
        <FadeLeft threshold={0.5}>
          <IndexAbout />
        </FadeLeft>
        <FadeRight threshold={0.5}>
          <IndexGallery />
        </FadeRight>
        <FadeUp threshold={0.5}>
          <IndexContact />
        </FadeUp>
      </main>
    </div>
  );
}
