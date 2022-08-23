import React from 'react'
import type { NextPage } from 'next'
import Layout from '../../components/templates/Layout'
import { IndexProps } from '../../types/props/types'
import GridTwoCol from '../../components/molecules/GridTwoCol'
import Link from 'next/link'

const ProfileIndex: NextPage<IndexProps> = ({pages}) => {
  return (
    <div>
      <Layout>
        <section className="text-gray-600 body-font max-w-4xl w-full content-start">
            <div className='border-b my-4'>
                <GridTwoCol>
                <div className="col-span-1">Author</div>
                <div className="col-span-2">
                  <p>hkumagai</p>
                </div>
              </GridTwoCol>
            </div>
            <div className='border-b my-4'>
                <GridTwoCol>
                <div className="col-span-1">Account</div>
                <div className="col-span-2">
                  <p>
                    <Link href="https://twitter.com/hkumagai1212">
                      <a>twitter</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="https://github.com/HirokiKumagai">
                      <a>Github</a>
                    </Link>
                  </p>
                </div>
              </GridTwoCol>
            </div>
            <div className='border-b my-4'>
                <GridTwoCol>
                <div className="col-span-1">About</div>
                <div className="col-span-2">
                  <p>接客業・営業からプログラミングへの道へ。</p>
                  <p>某ch Campでメンター、データ分析をやっていました。</p>
                  <p>42Tokyoの本科生。</p>
                  <p>普段はJavaScriptやPythonでカキカキ。42TokyoでGolangの課題やってからGopherになりたくなった。C言語は嫌い。<br/>このブログは練習のためTypeScriptで実装しました。</p>
                </div>
              </GridTwoCol>
            </div>
        </section>
      </Layout>
    </div>
  )
}

export default ProfileIndex
