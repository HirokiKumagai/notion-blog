import { FC } from "react";
import { LayoutProps } from "../../types/props/types";

const GridTwoCol: FC<LayoutProps> = ({children}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {children}
    </div>
  );
 };

export default GridTwoCol;
