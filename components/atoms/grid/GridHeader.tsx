import { FC } from "react";
import { GridHeaderProps } from "../../../types/props/types";

const GridHeader: FC<GridHeaderProps> = ({name}) => {
  return (
    <div className="col-span-1">{name}</div>
  );
};
export default GridHeader;
