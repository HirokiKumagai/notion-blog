import React from 'react'
import Nav from './Nav'
import Breadcrumb from '../organisms/BreadCrumb'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <Nav/>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex">
        <Link href={"/"}>
          <a>
            <h1 className='text-lg font-bold leading-6 text-gray-500 mt-4'>
              目指せスーパーエンジニア
            </h1>
          </a>
        </Link>

        <Breadcrumb/>
      </div>

    </header>
  )
}

export default Header
