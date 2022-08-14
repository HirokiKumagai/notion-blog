import { GetServerSideProps } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
import { Params } from '../../types/types';
import { sampleCards } from '../../utils/sample';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {slug} = context.params as Params ;

  const page = sampleCards.find((data => data.slug === slug));

  return {
    props: {
      page: page,
    }
  }
}

const Article = ({page}) => {
  return (
    <Layout>
      <article>
        記事の内容
        {page.content}
      </article>
    </Layout>
  )
}

export default Article
