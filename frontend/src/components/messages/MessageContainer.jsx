import { useEffect } from "react"
import useConversation from "../../zustand/useConversation.js"
import MessageInput from "./MessageInput.jsx"
import Messages from "./Messages.jsx"
import { useAuth } from "../../context/auth.contex.jsx"
import { FaMessage } from "react-icons/fa6"


const MessageContainer = () => {

  const { selectedConversation, setSelectedConversation} = useConversation();


  useEffect( () => {
    //cleanup function to setSelectedConversation to null after logout
    return (() => setSelectedConversation(null))
  }, [setSelectedConversation])



  return (
    <div className="px-4 max-w-5xl min-w-80  flex-grow text-start flex flex-col">
      {!selectedConversation ? (<NoChatSelected />) : (<>
        {/* Header */}
        <div className="bg-gray-900 py-2 px-4 mb-2 rounded-md">
          <span className="label-text">To : </span>
          <span className="text-white font-bold">{selectedConversation.username}</span>
        </div>
        <Messages />
        <MessageInput />
      </>)}

    </div>
  )
}

export default MessageContainer;


const NoChatSelected = () => {
  const { authUser } = useAuth();
  
  return (
    <div className="flex items-center justify-between h-full w-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semi-bold flex flex-col items-center gap-2">
        <p>Welcome {authUser.username} 👋, </p>
        <p>Select the chat to start messaging</p>
        <FaMessage className="size-6 text-white text-center" />
      </div>
    </div>
  )
}
