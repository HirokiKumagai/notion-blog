import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Card from "../../components/organisms/Card";
import Layout from "../../components/templates/Layout";
import { TagProps } from "../../types/props/types";
import { Params } from "../../types/types/types";
import { fetchPages } from "../../utils/notion";
import { getMultiSelect } from "../../utils/property";

export const getStaticPaths: GetStaticPaths = async () => {
  const { results }: { results: Record<string, any>[] } = await fetchPages({});

  const pathSet: Set<string> = new Set();
  for (const page of results) {
    for (const tag of getMultiSelect(page.properties.tags.multi_select)) {
      pathSet.add(tag);
    }
  }

  const paths = Array.from(pathSet).map((tag) => {
    return {
      params: {
        tag: tag,
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tag } = ctx.params as Params;
  const { results } = await fetchPages({ tag: tag });
  return {
    props: {
      pages: results ? results : [],
      tag: tag,
    },
    revalidate: 10,
  };
};

const Tag: NextPage<TagProps> = ({ pages, tag }) => {
  return (
    <Layout>
      <div>
        <h1 className="mt-10">{`${tag}`}</h1>
        <section className="text-gray-600 body-font">
          <div className="grid md:gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 w-full my-12">
            {pages.map((page, index) => (
              <Card key={index} page={page} />
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Tag;
