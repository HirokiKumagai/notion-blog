import React, { FC, ReactNode } from "react";
import { LayoutProps } from "../../types/props/types";
import Header from "./Header";


const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="relative overflow-hidden">
      <Header/>
      <div className="flex flex-col max-w-4xl items-center w-full mx-auto">
        <main className="w-full pb-12 px-4">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
