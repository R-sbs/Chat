
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Login from './pages/login/Login.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/auth.contex.jsx';

function App() {

  const { authUser, setAuthUser } = useAuth();

  return (
    <div className='p-4 h-screen max-w-7xl mx-auto flex items-center justify-center'>
      <Routes>
        <Route path='/' element={ authUser ? <Home /> : <Navigate to={'/login'} />  } />
        <Route path='/signup' element={ authUser ? <Navigate to={'/'} />  : <SignUp />} />
        <Route path='/login' element={ authUser ? <Navigate to={'/'} />  : <Login />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
