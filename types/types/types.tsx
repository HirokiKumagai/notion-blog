import { ParsedUrlQuery } from "querystring";
export type Params = ParsedUrlQuery & {
  slug?: string;
  tag?: string;
};

export type MetaDataType = {
  pageTitle?: string
  pageDescription?: string
  pagePath?: string
  pageImg?: string
  pageImgWidth?: number
  pageImgHeight?: number
}

export type FileType = {
  file?: { url: string };
  external?: { url: string };
};

export type AnnotationType = {
  bold: boolean;
  code: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  color: string;
};

export type RichTextType = {
  plain_text: string;
  href: string | null;
  annotations: AnnotationType;
};

export type PropertyType = {
  name: { title: RichTextType[] };
  author: { rich_text: RichTextType[] };
  slug: { rich_text: RichTextType[] };
  published: { date: { start: string } };
  isPublic: { checkbox: boolean };
  tags: { multi_select: [{ name: string }] };
  category: {select: { name: string } };
};

export type PageType = {
  id: string;
  cover: FileType | null;
  properties: PropertyType;
};
