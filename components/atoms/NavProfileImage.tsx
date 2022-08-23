import Image from 'next/image'
import React from 'react'

const NavProfileImage = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    // <Image
    //   className="h-8 w-8 rounded-full"
    //   src="/kuma_noidea.png"
    //   height={30}
    //   width={30}
    //   alt="profile"
    // />
  )
}

export default NavProfileImage
