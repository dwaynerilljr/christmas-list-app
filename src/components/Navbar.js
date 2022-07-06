import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-white flex col-span-6 p-8 text-lg text-primary'>
        <a href="">logo</a>
        <span className='ml-auto'>
            <a className='px-2' href="">Sign Up</a>
            <a href="">Login</a>
            <a className='px-2' href="">FAQ</a>
        </span>
    </div>
  )
}
