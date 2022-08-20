import { PageType, RichTextType } from "../types/props/types";

export const getText = (richTextArr: RichTextType[]) => {
  try {
    const textArr = richTextArr.map((richText) => richText.plain_text);
    return textArr.join("");
  } catch(err) {
    console.error(err);
  }
  return "";
}

export const getCover = (cover: PageType["cover"]) => {
  if(cover && cover.file) return cover.file.url;
  if(cover&& cover.external) return cover.external.url;
  return "/noimage.png";
}

export const getDate = (date: {start?: string}) => {
  try {
    return date.start;
  } catch (error) {
    console.error(error);
  }
}

export const getMultiSelect = (multiSelect: [{ name: string }]) => {
  try {
    return multiSelect.map((tag) => tag.name);
  } catch (error) {
    console.error(error)
  }
  return [];
};

export const getSelect = (select: {name: string }) => {
  try {
    return select.name;
  } catch (error) {
    console.error(error);
  }
}
