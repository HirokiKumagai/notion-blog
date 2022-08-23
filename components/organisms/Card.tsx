import Image from 'next/image'
import Link from 'next/link'
import React, {FC} from 'react'
import { CardProps } from '../../types/props/types'
import { getCover, getDate, getMultiSelect, getSelect, getText } from '../../utils/property'
import CardCategory from '../atoms/card/Category'
import CardDate from '../atoms/card/Date'
import CardImage from '../atoms/card/Image'
import CardTitle from '../atoms/card/Title'
import CardMeta from '../molecules/CardMeta'
import TagsSet from '../molecules/TagsSet'

const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link href={`/articles/${getText(page.properties.slug.rich_text)}`}>
      <a className="flex justify-center ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-start grid">
          <CardImage src={getCover(page.cover)}/>
          <CardMeta>
            <CardCategory name={getSelect(page.properties.category.select)}/>
            <CardTitle name={getText(page.properties.name.title)}/>
            <CardDate date={getDate(page.properties.published.date)}/>
          </CardMeta>
          <TagsSet tags={getMultiSelect(page.properties.tags.multi_select)}/>
        </div>
      </a>
    </Link>
  );
};

export default Card;
