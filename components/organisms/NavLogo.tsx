import Image from 'next/image'
import React from 'react'

const NavLogo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Image
        className="block w-auto"
        src="/kuma_noidea.png"
        alt="Workflow"
        width={30}
        height={30}
      />
    </div>
  )
}

export default NavLogo
