import { FC } from "react";
import { TagsSetProps } from "../../types/props/types";
import TagElement from "../atoms/TagElement";

const TagsSet: FC<TagsSetProps> = ({tags}) => {
  return (
    <div className="px-6 pb-4 flex flex-wrap">
      {tags.map(
        (tag, index) => {
          return <TagElement key={index} tag={tag}/>;
        }
      )}
    </div>
  );
};
export default TagsSet;
