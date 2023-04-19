import React from 'react';
import { useSelector } from 'react-redux';

function Sidebar() {
  const isMenuOpen = useSelector(state=>state.app.isMenuOpen);
  if(!isMenuOpen){return null}
  return (
    
    <div className='shadow-lg w-48 p-5 '>
      <ul>
        <h1>Watch later</h1>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>Four</li>
      </ul>

    </div>
  )
}

export default Sidebar