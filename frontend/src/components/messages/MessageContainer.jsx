import MessageInput from "./MessageInput"
import Messages from "./Messages"

import { FaMessage } from "react-icons/fa6"


const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <div className="px-4 max-w-5xl flex-grow text-start flex flex-col">
      {noChatSelected ? (<NoChatSelected />) : (<>
        {/* Header */}
        <div className="bg-black  py-2 px-4 mb-2 rounded-md">
          <span className="label-text">To : </span>
          <span className="text-white font-bold">{" "}John Jack</span>
        </div>
        <Messages />
        <MessageInput />
      </>)}

    </div>
  )
}

export default MessageContainer;


const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-between h-full w-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semi-bold flex flex-col items-center gap-2">
        <p>Welcome John 👋, </p>
        <p>Select the chat to start messaging</p>
        <FaMessage className="size-6 text-white text-center" />
      </div>
    </div>
  )
}
