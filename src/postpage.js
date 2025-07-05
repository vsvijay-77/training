import React from 'react'
import { useParams } from 'react-router-dom'
const Postpage = () => {
        const {id}=useParams()
  return (
    <div>
      <p>POSTS {id}</p>
    </div>
  )
}

export default Postpage
