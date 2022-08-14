import React, { FC, ReactNode } from "react";
import { LayoutProps } from "../types/types";


const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col item-center w-full mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
