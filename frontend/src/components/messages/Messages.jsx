 
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton';
import Message from '../messages/Message'
import { useEffect, useRef } from 'react';
import useListenMessages from '../../hooks/useListenMessages';
 

export default function Messages() {
  const {loading,messages} = useGetMessages();
 useListenMessages();
const lastMessageRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{lastMessageRef.current?.scrollIntoView({behavior:'smooth'})},100)
  },[messages]);
   
  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((message)=>(
          <div className="" key={message._id}
          ref={lastMessageRef}
          >
              <Message  message={message}/>
          </div>
      
      ))}
        {loading && [...Array(3)].map((_,idx)=> <MessageSkeleton key={idx}/>)}
{!loading && messages.length === 0 && (
  <p className='text-center text-white'>Send a message to start the conversation !</p>
)}
    </div>
  )
}
