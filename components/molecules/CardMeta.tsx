import { FC } from "react";
import { LayoutProps } from "../../types/props/types";

const CardMeta: FC<LayoutProps> = ({children}) => {
  return(
    <div className="px-6 pt-4 ">
      {children}
    </div>
  );
};

export default CardMeta;
