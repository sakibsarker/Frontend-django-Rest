import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';



const AdvocatePage = () => {
  const{username}=useParams()

  const[advocate,setAdvocate]=useState(null)
  useEffect(()=>{
    getDataBio();
  },[username])

  let getDataBio = async () => {
    let res = await axios.get(`http://127.0.0.1:8000/api/advocates/${username}/`)
    console.log(res)
    setAdvocate(res.data)
  }
  console.log(advocate)

  return (
    <>
      {advocate && (
        <div>
        <p>
           {advocate.username} 
        </p>
        <p>
        {advocate.bio}
        </p>
        </div>
      )}
     
    </>

  )
}

export default AdvocatePage