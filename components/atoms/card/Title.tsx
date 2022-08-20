import { FC } from "react"
import { CardTitleProps } from "../../../types/props/types";

const CardTitle: FC<CardTitleProps> = ({name}) => {
  return (
    <h3 className="text-base font-medium mb-3">
      {name}
    </h3>
  );
};
export default CardTitle;
