import React from 'react'

export default function GenderCheckbox() {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className='lable-text text-white'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
            </div>
            <div className="">
            <label className={`label gap-2 cursor-pointer`}>
                <span className='lable-text text-white'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>

           </div>
         </div>
  )
}
