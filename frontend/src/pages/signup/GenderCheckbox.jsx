
export default function GenderCheckbox({onGenderChange,selectedGender}) {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' && 'selected'}`}>
                <span className='lable-text text-white'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900'
                checked={selectedGender === 'male'} onChange={()=>onGenderChange("male")}
                />
            </label>
            </div>
            <div className="">
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' && 'selected'}`}>
                <span className='lable-text text-white'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900'
                checked={selectedGender === 'female'} onChange={()=>onGenderChange("female")}
                />
            </label>

           </div>
         </div>
  )
}
