import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'

export default function MessageContainer() {

   const {selectedConversation, setSelectedConversation }= useConversation();

   useEffect(()=>{
    return ()=> setSelectedConversation(null);
   },[setSelectedConversation])
 
  return (
    <div className='md:min-w-[380px] flex flex-col '> 
    { !selectedConversation ? <NoChatSelected/> : (

      <>
      {/* header */}
    <div className="bg-slate-500 px-4 py-2 mb-2 text-start  ">
        <span className='label-text text-white'>To</span>{""} &nbsp;
        <span className=' font-bold text-white'>{selectedConversation.fullName}</span>
    </div>
    <Messages/>
    <MessageInput/>
    </>
    )}
    </div>
  )
}

const NoChatSelected = ()=>{
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>👋 {authUser.fullName} </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}