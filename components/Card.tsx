import Image from 'next/image'
import Link from 'next/link'
import React, {FC} from 'react'
import { CardProps } from '../types/types'
import { getCover, getDate, getMultiSelect, getSelect, getText } from '../utils/property'

const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link href={`/articles/${getText(page.properties.slug.rich_text)}`}>
      <a className="flex justify-center ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid">
          <div>
            <Image
              className="w-full static h-auto"
              src={getCover(page.cover)}
              alt=""
              objectFit="cover"
              width={400}
              height={225}
              quality={30}
            />
          </div>
          <div className="px-6 pt-4 ">
            <h2 className="tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase">{getSelect(page.properties.category.select)}</h2>
            <h3 className="text-base font-medium mb-3">
              {getText(page.properties.name.title)}
            </h3>
            <p className="text-gray-700 text-xs">
              {getDate(page.properties.published.date)}
            </p>
          </div>
          <div className="px-6 pb-4 ">
            {getMultiSelect(page.properties.tags.multi_select).map(
              (tag, index) => (
                <span
                  key={index}
                  className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2"
                >
                  {`#${tag}`}
                </span>
              )
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};
