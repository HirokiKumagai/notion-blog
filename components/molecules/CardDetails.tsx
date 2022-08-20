import { FC } from "react";
import { LayoutProps } from "../../types/props/types";

const CardDetails: FC<LayoutProps> = ({children}) => {
  return(
    <div className="px-6 pt-4 ">
      {children}
    </div>
  );
};

export default CardDetails;
