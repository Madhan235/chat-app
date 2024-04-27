 
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import useConversation from '../../zustand/useConversation'

export default function Home() {
  // const {selectedConversation}=useConversation()
   
  return (
    
   

    <div className='flex h-[85%]  sm:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
 

      <Sidebar/>


      <MessageContainer/>
 
      </div>
      
     
  )
}
