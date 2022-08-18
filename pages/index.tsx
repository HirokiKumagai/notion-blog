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
        <div>
          <h1>目指せスーパーエンジニア</h1>
          <div>
            {pages.map((page, index)=>(
              <Card key={index} page={page}/>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
