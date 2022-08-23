import React, { FC } from "react";
import { LayoutProps } from "../../types/props/types";
import Header from "./Header";
import Seo from "./Seo";
const Layout: FC<LayoutProps> = ({children, metaData}) => {
  return (
    <div className="relative overflow-hidden">
      <Seo
        pageTitle={metaData?.pageTitle}
        pageDescription={metaData?.pageDescription}
        pagePath={metaData?.pagePath}
        pageImg={metaData?.pageImg}
        pageImgWidth={metaData?.pageImgWidth}
        pageImgHeight={metaData?.pageImgHeight}/>
      <Header/>
      <div className="flex flex-col max-w-4xl items-center w-full mx-auto">
        <main className="w-full pb-12 px-4">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
