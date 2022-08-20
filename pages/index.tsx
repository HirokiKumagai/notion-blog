import type { GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { fetchPages } from '../utils/notion'
import { IndexProps } from '../types/types'

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results? results : [],
    },
    revalidate: 10,
  };
}
const Home: NextPage<IndexProps> = ({pages}) => {
  return (
    <div>
      <Layout>
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

export default Home
