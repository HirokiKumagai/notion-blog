import React, { FC, ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
}

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
