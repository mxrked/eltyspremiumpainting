// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

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

      <main id="PAGE_CNT" className="page-cnt"></main>
    </div>
  );
}
