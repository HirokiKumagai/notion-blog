import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/templates/Layout'
import Card from '../../components/organisms/Card'
import { fetchPages } from '../../utils/notion'
import { IndexProps } from '../../types/props/types'

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results? results : [],
    },
    revalidate: 10,
  };
}
const ArticleIndex: NextPage<IndexProps> = ({pages}) => {
  const metaData ={
    pageTitle: "記事一覧ページ",
    pageDescription: "目指せスーパーエンジニアBlogの記事一覧を表示するページです。",
    pagePath: "/articles",
    pageImg: "",
    pageImgWidth: 1280,
    pageImgHeight: 640
  }
  return (
    <div>
      <Layout metaData={metaData}>
        <section className="text-gray-600 body-font">
            <div className="grid md:gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 w-full my-12">
              {pages.map((page, index)=>(
                <Card key={index} page={page}/>
              ))}
            </div>
        </section>
      </Layout>
    </div>
  )
}

export default ArticleIndex
