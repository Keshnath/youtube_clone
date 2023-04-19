import React from 'react'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'

function Body() {
  return (
    <div className='flex'>
        <Sidebar/>
        <VideoContainer/>
    </div>
  )
}

export default Body