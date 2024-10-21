
import SearchInput from './SearchInput.jsx'
import LogoutBtn from './LogoutBtn.jsx'
import Conversations from './Conversations.jsx'

const SideBar = () => {
  return (
    <div className='px-4 max-w-xl'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <div className='divider px-3'></div>
      <LogoutBtn />
    </div>
  )
}

export default SideBar
