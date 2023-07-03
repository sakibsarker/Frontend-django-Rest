import React, { useEffect, useState } from 'react'
import {getData} from '../hooks/UseHome'
import {Link} from 'react-router-dom'

const HomePage = () => {
  const[advocates,setAdvocates]=useState([])
  useEffect(()=>{
    getData(setAdvocates)
  },[])


  return (
    <div><h1>Homepage</h1>
    <div>
      {advocates.map((advocate,index)=>(
        <div key={index}>
         <strong>{advocate.username}</strong>
         <Link to={`/advocate/${advocate.username}`}>View</Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default HomePage