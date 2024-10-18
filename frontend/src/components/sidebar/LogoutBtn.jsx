import { FaSignOutAlt } from "react-icons/fa";
import useLogout from "../../hooks/useLogout";
import { useAuth } from "../../context/auth.contex";


const LogoutBtn = () => {
  const { loading, logout} = useLogout();
  const { authUser } = useAuth();
  const user = authUser?.username.toUpperCase();

  return (
    <div>
      <p className="text-white font-bold mx-auto">{user}</p>
      <button onClick={logout} className="flex gap-2 hover:underline my-2">
      <FaSignOutAlt className="text-white size-6 rotate-180 hover:animate-pulse" />
      <p className="cursor-pointer">Logout</p>
      </button>
    </div>

  )
}

export default LogoutBtn
