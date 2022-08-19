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
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {pages.map((page, index)=>(
                <Card key={index} page={page}/>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home
