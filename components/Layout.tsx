import React, { FC, ReactNode } from "react";
import { LayoutProps } from "../types/types";


const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
