import React, { FC, ReactNode } from "react";
import { LayoutProps } from "../types/types";


const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col max-w-2xl items-center w-full mx-auto">
        <h1>目指せスーパーエンジニア</h1>
        <main className="w-full pb-12 px-4">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
