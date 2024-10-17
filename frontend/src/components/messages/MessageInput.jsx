import React from 'react'
import { AiOutlineSend } from "react-icons/ai";


const MessageInput = () => {
  return (
    <div className='px-4 my-3'>
        <div className="w-full relative">
            <input type="text" placeholder='Type your message' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white border-gray-600' />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <AiOutlineSend className='text-white size-5 hover:-rotate-[30deg] transition-all hover:scale-110'/>
            </button>
        </div>
    </div>
  )
}

export default MessageInput
 