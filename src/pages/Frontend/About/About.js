import { Button, Input } from 'antd'
import React, { useState } from 'react'

export default function About() {
const [value ,setValue] = useState('')
const [state,setState] = useState([])
const [follower,setFollower] = useState([])
//follows
const handleFollower = async()=>{
let res = await fetch(`https://api.github.com/users/${value}/followers`)
  res = await res.json()
 .catch(er =>{ 
  console.error(er)
  window.notify('something worng','error')})

  setFollower([...res])
}
console.log('follower', follower)
//data
  const handleChange = (e)=>{
setValue(e==''? window.notify('seeeeeeee','error'): e.target.value)

}
  
const handleSearch = async()=>{
  
  let response = await fetch(`https://api.github.com/users/${value}`)
  response = await response.json()
 .catch(er=>{
  console.error(er)
  window.notify('something worng','error')


 })
  // console.log('drr',value)    
  // console.log ('ddddddddd',response)
  setState([response]);  }
  // console.log('savedddddddd',state)
  return (
    <>
    <div className='second'>
      <div className='container'>
      <div className='row'>
          <div className='col'>
          <h1 className='text-center'>Search GitHub <br/> Profiles</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
    <input  onChange={handleChange} className='px-2' type='text' placeholder='profile name'/>
<button className='ms-2 btn btn-secondary btn-lg' onClick={handleSearch}>search</button>
          </div>
        </div>
      <div className='row'>
       {state
       .map((item)=>{
   return    (   <div className='col-12 mt-5 d-flex justify-content-evenly'>
      <img src={item.avatar_url} alt='profile pic' width='220px'className='imge-fluid'/>
       <div>

       <h3><b>Name:</b>&emsp;{item.login}
        <br/> <b>company:</b>&emsp;{item.company}
        <br/>
        <b>bio:</b>&emsp;{item.bio}
        <br/>
        <b>Followers:</b>&emsp;{item.followers}
        <br/>
        <b>Following:</b>&emsp;{item.following}
        <br/>
        <b>Created at:</b>&emsp;{item.created_at}
        <br/>
        <b>UpDated at:</b>&emsp;{item.updated_at}
       </h3>
  <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleFollower}>See Followers</button>
       </div>
        </div>)
      })}
        </div>
      </div>
    </div>
   
    //modle

<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Followers</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <table className='table table-success table-striped text-center'>
        <tr>
          <th>id</th>
          <th>profile pic</th>
          <th>name</th>
          <th>node_id</th>
        </tr>
        {follower.map((item)=>{
  return( 
    <tr>
        <td>{item.id}</td>
        <td><img  src={item.avatar_url} width={50} style={{borderRadius:'50px'}}/></td>
        <td>{item.login}</td>
        <td>{item.followers_url}</td>
        <td>{item.company}</td>
      </tr>
  )
})}

       </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}
