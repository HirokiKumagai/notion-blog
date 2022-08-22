import React from 'react'
import { classNames } from '../../utils/headlessUI'
import { Menu } from '@headlessui/react'
const NavProfileMenuItem = (item: {name: string, url: string}) => {
  return (
  <Menu.Item>
    {({ active }) => (
      <a
        href={item.url}
        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
      >
        {item.name}
      </a>
    )}
  </Menu.Item>
  )
}

export default NavProfileMenuItem
