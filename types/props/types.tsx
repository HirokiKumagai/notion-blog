
import { ReactNode } from "react";
import { BlockType } from "notion-block-renderer";
import { PageType } from "../types/types";
import { type } from "os";

export type LayoutProps = {
  children: ReactNode;
};

export type PageProps = {
  slug: string;
  name: string;
  author: string;
  cover: string;
  published: string;
  category: string;
  tags: string[];
  content: string;
};

export type CardProps = { page: PageType };
export type CardImageProps = {src: string};
export type CardCategoryProps = {name: string | undefined};
export type CardTitleProps = {name: string | undefined};
export type CardDateProps = {date: string | undefined};

export type ArticleProps = {
  page: PageType;
  blocks: BlockType[];
};

export type ArticleMetaProps = CardProps;

export type IndexProps = { pages: PageType[] };

export type TagProps = IndexProps & { tag: string };
export type TagsSetProps = {tags: string[]}
export type TagElementProps = { key: number, tag: string};

export type BlockProps = { block: BlockType };

