import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { FC } from 'react'
import Layout from '../../components/templates/Layout'
import TagElement from '../../components/atoms/TagElement'
import { TagsIndexProps } from '../../types/props/types'
import { fetchTags } from '../../utils/notion'

export const getStaticProps: GetStaticProps = async () => {
  const results = await fetchTags()
  return{
    props: {
      tags: results? results : [],
    },
    revalidate: 10,
  };
}
const TagsIndex: FC<TagsIndexProps> = ({tags}) => {
  const metaData ={
    pageTitle: "Tag一覧ページ",
    pageDescription: "目指せスーパーエンジニアBlogのTag一覧を表示するページです。",
    pagePath: "/tags",
    pageImg: "",
    pageImgWidth: 1280,
    pageImgHeight: 640
  }
  return (
    <div>
      <Layout metaData={metaData}>
        <section className="text-gray-600 body-font">
            <div className="grid md:gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 w-full my-12">
              {tags.map((tag, index) => {
                return (
                  <Link key={index} href={`/tags/${tag}`}>
                    <a><TagElement key={index} tag={tag}/></a>
                  </Link>
                )
              })}
            </div>
        </section>
      </Layout>
    </div>
  )
}

export default TagsIndex
