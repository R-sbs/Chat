import { FaSignOutAlt } from "react-icons/fa";

const LogoutBtn = () => {
  return (
    <div>
      <div className="flex gap-2 hover:underline my-2">
      <FaSignOutAlt className="text-white size-6 rotate-180 hover:animate-pulse" />
      <p className="cursor-pointer">Logout</p>
      </div>
    </div>

  )
}

export default LogoutBtn
