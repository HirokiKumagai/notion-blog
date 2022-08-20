import { FC } from "react";
import { GridContentProps } from "../../../types/props/types";

const GridContent:FC<GridContentProps> = ({context}) => {
  return (
    <div className="col-span-2">
      {context}
    </div>
  );
};
export default GridContent;
