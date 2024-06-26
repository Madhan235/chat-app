
import Conversation from './Conversation'
 
import useGetConversations from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

export default function Conversations({setClick,click}) {
   const {loading,conversations} = useGetConversations()

    
  return (
    <div className='py-2 flex flex-col overflow-auto'> 
     { conversations.map((conversation,idx)=>(
      <Conversation
      key={conversation._id}
      conversation={conversation}
      emoji = {getRandomEmoji()}
      lastIdx = {idx === conversations.length -1 }
      setClick={setClick}
      click={click}
 
      />))}
     
     {loading ? ( <span className='loading loading-spinner'></span> ) : ( null
     ) }
    </div>
  )
}
