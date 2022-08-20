import Image from "next/image";
import { FC } from "react";
import { CardImageProps } from "../../../types/props/types";

const CardImage: FC<CardImageProps> =({src}) => {
  return (
    <div>
      <Image
        className="w-full static h-auto"
        src={src}
        alt=""
        objectFit="cover"
        width={400}
        height={225}
        quality={30}
      />
    </div>
  );
};

export default CardImage;
