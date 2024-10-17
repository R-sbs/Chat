
import SearchInput from './SearchInput'
import LogoutBtn from './LogoutBtn'
import Conversations from './Conversations'

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
