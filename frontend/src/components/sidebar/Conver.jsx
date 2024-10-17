
import { FaUser } from 'react-icons/fa6';

const Conversation = ({bg}) => {



  return (
    <div className={`flex gap-2 items-center hover:bg-black rounded-md px-2 py-1 cursor-pointer ${bg}`}>
        <div className="avatar online outline-0">
            <div className="w-10 rounded-md p-2">
            <FaUser className='size-6'  />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200 tracking-wider text-sm">John Jack</p>
            </div>
        </div>
        <div className="divider my-0 py-0 h-1"></div>
    </div>
  )
}

export default Conversation;
