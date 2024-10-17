import MessageContainer from "../components/messages/MessageContainer"
import SideBar from "../components/sidebar/SideBar"

const Home = () => {
  return (
    <div className='flex w-9/12 gap-5 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-50 pt-10 pb-5 px-5'>
     <SideBar />
     <MessageContainer />
    </div>
  )
}

export default Home
