import { Typography } from 'antd'
import Link from 'next/link'
import React from 'react'

const SiteHeader = () => {
  return (
    <div className='p-2 bg-white header-style'>
      <div className='border-2 border-solid border-[red] flex justify-between p-3' >
        <div>
          Logo
        </div>

        <div className='flex gap-5'>
          <Link href='home' className='text-base font-semibold'>Home</Link>
          <Link href='home'>Products</Link>
          <Link href='products'>About Us</Link>
        </div>
      </div>
    </div>

  )
}

export default SiteHeader