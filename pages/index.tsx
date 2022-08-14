import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { sampleCards } from '../utils/sample'
import Layout from '../components/Layout'
import Card from '../components/Card'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <div>
          <h1>目指せスーパーエンジニア</h1>
          <div>
            {sampleCards.map((page, index)=>(
              <Card key={index} page={page}/>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
