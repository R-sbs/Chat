import MessageContainer from "../components/messages/MessageContainer.jsx"
import SideBar from "../components/sidebar/SideBar.jsx"

const Home = () => {
  return (
    <div className='flex w-10/12 gap-5 md:h-[550px] rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-50 pt-10 pb-5 px-5'>
     <SideBar />
     <MessageContainer />
    </div>
  )
}

export default Home
