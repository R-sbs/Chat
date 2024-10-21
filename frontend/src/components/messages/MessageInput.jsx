import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import useSendMessage from '../../hooks/useSendMessage.js';


const MessageInput = () => {
  
  const [message, setMessage ] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(!message) return;

    await sendMessage(message);

    setMessage("");

  }


  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" placeholder='Type your message' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white border-gray-600' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            {loading ? <span className='mx-auto loading loading-spinner'></span> : <AiOutlineSend className='text-white size-5 hover:-rotate-[30deg] transition-all hover:scale-110'/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput
 