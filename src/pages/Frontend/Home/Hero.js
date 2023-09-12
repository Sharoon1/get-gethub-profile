import React, { useEffect, useState } from 'react'

export default function Hero() {
const [state ,setState]=useState([])
const [value ,setValue]=useState([])
const fatchDocument = async()=>{
let response = await fetch('https://api.github.com/users')
console.log('sdfasdf',response)
response = await response.json()
//  console.log (response)
 setState(response)
}
useEffect(()=>{
  fatchDocument()
},[])
const handleChange=(e)=>{
setValue(e.target.value)
}
  
return (
<>
<div className='tableData'>
<div className='container '>
  <div className='row'>
    <div className='col'>
      <h1 className='text-center'>Search GitHub Profile</h1>
    </div>
  </div>
  <div className='row'>
    <div className='col text-center my-2'>

      <input type='text' className='p-1' placeholder='search profile' onChange={handleChange}/>
<button className='btn btn-secondary mb-1 ms-2 btn-md'>search</button>    </div>
  </div>
  <div className='row'>
    <div className='col d-flex justify-content-center'>


  <table className='table w-75 text-center  ' >
      <tr className='bg-secondary my2'>
        <th>Id</th>
        <th>Profile Pic</th>
        <th>Profile Name</th>
        <th>Node Id</th>
        <th>Followers</th>
      </tr> 
{state.filter((item)=>{
  const name = item.login
  const search = value
return search? search && name.startsWith(search):name 
}).map((item)=>{
  return( 
    <tr>
        <td>{item.id}</td>
        <td><img  src={item.avatar_url} width={60} style={{borderRadius:'50px'}}/></td>
        <td>{item.login}</td>
        <td>{item.node_id}</td>
        <td>hy</td>
      </tr>
  )
})}
</table>
</div>
  </div>
</div>
</div>
</>  )
}
