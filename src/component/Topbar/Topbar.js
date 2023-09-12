import dayjs from 'dayjs'
import React from 'react'

export default function Topbar() {
  return (
    <>
    <div className='bg-secondary'>
      <div className='container'>
<div className='row'>
  <div className='col'>
    <h3 className='text-center my-1 text-white'>{dayjs().format('YYYY-MMM-D / h:s:m	')}</h3>
  </div>
</div>
      </div>
    </div>
    </>
  )
}
