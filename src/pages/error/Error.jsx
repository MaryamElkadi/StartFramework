import React from 'react'
import error from '../../assets/404.jpeg'; // ✅ Import the image

export default function Error() {
  return (
    <div>
        <img src={error} alt=""  className='flex justify-center items-center w-full h-screen'/>
    </div>
  )
}
