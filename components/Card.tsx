import Image from 'next/image'
import Link from 'next/link'
import React, {FC} from 'react'
import { CardProps } from '../types/types'
import { getCover, getDate, getMultiSelect, getText } from '../utils/property'

const Card: FC<CardProps> = ({page}) => {

  return (
    <Link href={`/articles/${getText(page.properties.slug.rich_text)}`}>
      <a>
        <div>
          <div>
            <Image src={getCover(page.cover)} alt="" objectFit='cover' width={100} height={100}/>
          </div>
          <div>
            <h2>{getText(page.properties.name.title)}</h2>
            <p>{getDate(page.properties.published.date)}</p>
          </div>
          <div>
            {getMultiSelect(page.properties.tags.multi_select).map((tag, index) =>(
              <span key={index}>{`#${tag}`}</span>
            ))}
          </div>
        </div>
      </a>
    </Link>

  )
}

export default Card
