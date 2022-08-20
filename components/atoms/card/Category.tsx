import { FC } from "react"
import { CardCategoryProps } from "../../../types/props/types";

const CardCategory: FC<CardCategoryProps> = ({name}) => {
  return (
    <h2 className="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase">
      {name}
    </h2>
  );
};
export default CardCategory;
