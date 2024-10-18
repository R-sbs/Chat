import { FaUser } from "react-icons/fa6"
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from '../../context/auth.contex.jsx'
import extractTime from "../../utils/extractTime.js";


const Message = ({message}) => {


  const { authUser } = useAuth();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const formattedTime = extractTime(message.createdAt);

  const chatClassName = fromMe ? 'chat-end' : 'chat-start';

  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic ;

  const bubbleBgColor = fromMe ? 'bg-blue-400' : 'bg-gray-700';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-8 rounded-lg">
             <img src={profilePic} alt="pic" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} text-[14px]`}>{message.message}</div>
      <div className="chat-footer opacity-70 text-xs flex gap-1 items-center py-1">{formattedTime}</div>
    </div>
  )
}

export default Message
