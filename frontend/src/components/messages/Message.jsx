import { FaUser } from "react-icons/fa6"

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className="chat-image avatar">
        <div className="w-8 rounded-lg">
             <FaUser className="h-8 w-8" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500 text-[14px]">Hii, What{"'"}s Up?</div>
      <div className="chat-footer opacity-70 text-xs flex gap-1 items-center py-1">12:42</div>
    </div>
  )
}

export default Message
