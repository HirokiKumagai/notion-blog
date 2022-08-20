import React, { FC, ReactNode } from "react";
import { LayoutProps } from "../../types/props/types";
import Breadcrumb from "../organisms/BreadCrumb";


const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col max-w-4xl items-center w-full mx-auto">
        <h1>目指せスーパーエンジニア</h1>
        <Breadcrumb/>
        <main className="w-full pb-12 px-4">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
