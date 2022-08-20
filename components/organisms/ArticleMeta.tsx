import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { ArticleMetaProps } from "../../types/props/types";
import { getCover, getDate, getMultiSelect, getText } from "../../utils/property";
import GridContent from "../atoms/grid/GridContent";
import GridHeader from "../atoms/grid/GridHeader";
import TagElement from "../atoms/TagElement";
import GridTwoCol from "../molecules/GridTwoCol";

const ArticleMeta: FC<ArticleMetaProps> = ({ page }) => {
  return (
    <div>
      {/* page cover */}
      <Image
        src={getCover(page.cover)}
        alt=""
        objectFit="cover"
        width={896}
        height={360}
        quality={50}
      />

      {/* page name */}
      <h1>{getText(page.properties.name.title)}</h1>
      <div>
        <GridTwoCol>
          {/* published */}
          <GridHeader name="Published"/>
          <GridContent context={getDate(page.properties.published.date)}/>

          {/* author */}
          <GridHeader name="Author"/>
          <GridContent context={getText(page.properties.author.rich_text)}/>

          {/* tags */}
          <GridHeader name="Tags"/>
          <div className="col-span-2">
            {getMultiSelect(page.properties.tags.multi_select).map(
              (tag: string, index: number) => (
                <Link key={index} href={`/tags/${tag}`}>
                  <a>
                    <TagElement key={index} tag={tag}/>
                  </a>
                </Link>
              )
            )}
          </div>
        </GridTwoCol>
      </div>
    </div>
  );
};

export default ArticleMeta;
