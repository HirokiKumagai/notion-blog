import { FC } from "react"
import { CardDateProps } from "../../../types/props/types";

const CardDate: FC<CardDateProps> = ({date}) => {
  return (
    <p className="text-gray-700 text-xs">
      {date}
    </p>
  );
};
export default CardDate;
