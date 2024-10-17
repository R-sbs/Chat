import Conversation from "./conver"

const Conversations = () => {

  return (

    <div className='px-8 flex flex-col overflow-auto max-h-[300px] flex-1'>
      <Conversation bg="bg-black" />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>

  )
}

export default Conversations
