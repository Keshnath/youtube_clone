import React from 'react'

const Test1 = () => {
    const arr = [1,2,3,4,5,6]
  return (
    <div>
        <ul>
            <a href='/'>
                {arr.map((e)=>{<li>e</li>})}
            </a>
        </ul>
    </div>
  )
}

export default Test1