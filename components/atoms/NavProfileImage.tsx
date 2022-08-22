import Image from 'next/image'
import React from 'react'

const NavProfileImage = () => {
  return (
    <Image
      className="h-8 w-8 rounded-full"
      src="/kuma_noidea.png"
      height={30}
      width={30}
      alt="profile"
    />
  )
}

export default NavProfileImage
