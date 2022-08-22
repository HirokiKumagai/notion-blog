import Link from 'next/link'
import React, { FC } from 'react'
import { NavMenuProps } from '../../types/props/types'
import { classNames } from '../../utils/headlessUI'

const NavMenu: FC<NavMenuProps> = ({navigation}) => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {navigation.map((item: any, index: number) => (
          <Link key={index} href={item.href}>
            <a
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          </Link>

        ))}
      </div>
    </div>
  )
}

export default NavMenu
