import React from 'react'

export default function Message() {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src="https://avatar.iran.liara.run/public/45" alt="chat bubble" 
            />
            </div>
            </div>

            <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is up ?</div> 
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">12:42</div>

    </div>
  )
}
