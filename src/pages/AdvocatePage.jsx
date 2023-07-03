import React from 'react'
import { useParams } from 'react-router-dom'
const AdvocatePage = () => {
  const param=useParams()
  const username=param.username
  return (
    <div>Advocate {username} </div>
  )
}

export default AdvocatePage