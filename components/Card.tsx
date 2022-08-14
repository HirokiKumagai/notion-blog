import Image from 'next/image'
import React, {FC} from 'react'
import { CardProps } from '../types/types'

const Card: FC<CardProps> = ({page}) => {
  return (
    <div>
      <div>
        <Image src={page.cover} alt="" objectFit='cover' width={100} height={100}/>
      </div>
      <div>
        <h2>{page.name}</h2>
        <p>{page.published}</p>
      </div>
      <div>
        {page.tags.map((tag, index) =>(
          <span key={index}>{`#${tag}`}</span>
        ))}
      </div>
    </div>
  )
}

export default Card
