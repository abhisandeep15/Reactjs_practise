import React, { useState } from 'react'

const Home = () => {
const [title,settitle]=useState('');


  return (
    <div>
        <input type='text' placeholder='Enter Title Here' className='p-2 rounded-2xl place-content-evenly'
         value={title} onChange={(e)=>settitle(e.target.value)}/>

        <button>
            Create My paste
        </button>
    </div>
  )
}

export default Home
