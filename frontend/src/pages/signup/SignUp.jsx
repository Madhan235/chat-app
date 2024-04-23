import { Button } from 'flowbite-react'
import React from 'react'
import GenderCheckbox from './GenderCheckbox'

export default function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up &nbsp;
        <span className='text-blue-400'>ChatSite</span>
        </h1>

        <form>
          <div >
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
          </div>
          <div  >
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10' />
          </div>          
          <div  >
            <label className='label p-2'>
              <span className='text-base label-text text-white'> Password</span>
            </label>
            <input type="pasword" placeholder='**********' className='w-full input input-bordered h-10' />
          </div>          
          <div  >
            <label className='label p-2'>
              <span className='text-base label-text text-white'> Confirm Password</span>
            </label>
            <input type="pasword" placeholder='**********' className='w-full input input-bordered h-10' />
          </div> 
<div className="mt-2">

        <GenderCheckbox/>
</div>

          <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white' href='#'>
            Already have an account?</a>         
<div className="">
<Button className='btn btn-block mt-2' gradientDuoTone={"purpleToBlue"}  >Signup</Button>
</div>
        </form>
      </div>
      
       </div>
  )
}
