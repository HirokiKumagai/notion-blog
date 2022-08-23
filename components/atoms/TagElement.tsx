import { FC } from "react";
import { TagElementProps } from "../../types/props/types";

const TagElement: FC<TagElementProps> = ({tag}) => {
  return (
    <span
      className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2"
    >
      {`#${tag}`}
    </span>
  );
};
export default TagElement;
