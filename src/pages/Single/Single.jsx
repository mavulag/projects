import React from 'react'
import './Single.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Singlepost from '../../components/Singlepost/Singlepost'

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single
