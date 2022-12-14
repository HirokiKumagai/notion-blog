import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY as string });
const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export const fetchPages = async ({ slug, tag, }: { slug?: string, tag?: string }) => {
  const and: any = [
    {
      property: "isPublic",
      checkbox: {
        equals: true,
      },
    },
    {
      property: "slug",
      rich_text: {
        is_not_empty: true,
      },
    },
  ];

  if (slug) {
    and.push({
      property: "slug",
      rich_text: {
        equals: slug,
      },
    });
  }

  if (tag) {
    and.push({
      property: "tags",
      multi_select: {
        contains: tag,
      }
    })
  }

  const data = [];
  let cursor = undefined;
  while (true) {
    const { results, next_cursor }: any = await notion.databases.query({
      database_id: DATABASE_ID,
      start_cursor:  cursor,
      filter: {
        and: and,
      },
      sorts: [
        {
          property: "published",
          direction: "descending",
        },
      ],
    });
    data.push(...results);
    if (!next_cursor) break;
    cursor = next_cursor;
  }
  return { results : data }
};

export const fetchBlocksByPageId = async (pageId: string) => {
  const data = [];
  let cursor = undefined;
  while (true) {
    const { results, next_cursor }: any = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });
    data.push(...results);
    if (!next_cursor) break;
    cursor = next_cursor;
  }
  return { results: data };
};

export const fetchTags = async () => {
  const pagesData = await fetchPages({});
  let tagsData = pagesData.results.map((page) =>{
    return(page.properties.tags.multi_select);
  })
  tagsData = [].concat(...tagsData);
  let results = new Set(tagsData.map((tagData) => {return tagData.name}));
  return Array.from(results);
}
