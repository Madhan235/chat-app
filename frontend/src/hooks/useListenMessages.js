import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversation from '../zustand/useConversation';
import notification1 from '../assets/sounds/notification1.wav'
export default function useListenMessages() {
   const {socket } = useSocketContext();
   const {messages,setMessages} = useConversation();

   useEffect(()=>{
    socket?.on('newMessage',(newMessage)=>{
        newMessage.shouldShake = true;
        const sound = new Audio(notification1);
        sound.play();
        setMessages([...messages,newMessage]);
    })

    return ()=> socket?.off('newMessage');
   },[socket, messages, setMessages])
}
