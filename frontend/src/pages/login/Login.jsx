import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from '../../hooks/useLogin.js'



const Login = () => {

    const { loading, login } = useLogin();

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(inputs);
    }
    return (
        <div className="flex flex-col min-w-96 ml-10 mr-auto h-full items-center justify-center px-10 py-16">
            <div className="h-full min-h-fit bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 p-12 shadow-md bg-gray-400  w-full min-w-96 rounded-md">
                <h1 className="text-3xl text-gray-300 font-semibold text-center pb-6">Login
                    <span className="text-blue-400 pl-4">Chat App</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" className="w-full input input-bordered h-10" placeholder="Enter Your Username" value={inputs.username} onChange={(e) => { setInputs({ ...inputs, username: e.target.value }) }} />
                    </div>
                    <div className="mt-3">
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="w-full input input-bordered h-10" placeholder="Enter Your Password" value={inputs.password} onChange={(e) => { setInputs({ ...inputs, password: e.target.value }) }} />
                    </div>

                    <div className="block text-center my-4">
                        <button className="btn btn-sm btn-wide text-white md:btn-md mt-4" disabled={loading} onClick={handleLogin}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>

                    </div>
                    <Link to='/signup' className="text-sm inline-block">
                        {"Don't"} Have an Account? <span className="hover:underline text-slate-300 hover:text-white">Register Now</span>
                    </Link>

                </form>


            </div>


        </div>
    )
}

export default Login
