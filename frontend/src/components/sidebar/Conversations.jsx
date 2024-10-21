
import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation.jsx";

const Conversations = () => {

  const { loading, conversations } = useGetConversations();
 


  return (

    <div className='px-8 flex flex-col overflow-auto min-h-[280px] flex-1'>
      { conversations.map((conversation, index) => ( 
        <Conversation key={conversation._id} conversation={conversation} lastIndex={index === conversations.length -1} />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>

  )
}

export default Conversations
