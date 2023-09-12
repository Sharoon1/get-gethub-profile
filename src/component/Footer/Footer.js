import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <div className='bg-dark'>
      <div className='container'>
        <div className='row '>
          <div className='col '>
            <p className='text-center my-1 text-white'>&copy; {year} All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}
