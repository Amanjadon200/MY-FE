import React from 'react'
import About from '../About'
import Register from '../Register'

const MyProfile = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-[50%] h-[100vh]'>
        <img/>
        my profile
      </div>
      <div className='w-[50%] h-[100vh]'>
        <About/>
      </div>
    </div>
  )
}

export default MyProfile
