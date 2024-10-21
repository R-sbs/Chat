
import { useSocket } from '../../context/socket.context.jsx';
import useConversation from '../../zustand/useConversation.js';

const Conversation = ({ conversation, lastIndex} ) => {

  const { selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocket();

  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <div className={`flex gap-2 items-center hover:bg-gray-700 rounded-md px-2 py-1 cursor-pointer ${isSelected && 'bg-gray-900'}`} onClick={ () => (setSelectedConversation(conversation))}>
        <div className={`avatar outline-0 ${ isOnline && 'online'}`}>
            <div className="w-10 rounded-md p-2 overflow-hidden">
             <img src={conversation.profilePic} alt="pic" className='bg-cover w-full h-full'/>
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200 tracking-wider text-sm">{conversation.username }</p>
            </div>
        </div>
        { !lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </div>
  )
}

export default Conversation;
