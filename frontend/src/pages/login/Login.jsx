

const Login = () => {
    return (
        <div className="flex flex-col min-w-96 ml-10 mr-auto h-full items-center justify-center px-10 py-16">
            <div className="h-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 p-12 shadow-md bg-gray-400  w-full min-w-96 rounded-md">
                <h1 className="text-3xl text-gray-300 font-semibold text-center pb-6">Login
                    <span className="text-blue-400 pl-4">Chat App</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" className="w-full input input-bordered h-10" placeholder="Enter Your Username" />
                    </div>
                    <div className="mt-3">
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="w-full input input-bordered h-10" placeholder="Enter Your Password" />
                    </div>
                    
                    <div className="block text-center">
                        <button className="btn btn-sm btn-wide text-white md:btn-md my-10">Login</button>
                    </div>
                    <a href="#" className="text-sm inline-block">{"Don't"} Have an Account? <span className="hover:underline text-slate-300 hover:text-white">Register Now</span></a>
                </form>


            </div>


        </div>
    )
}

export default Login
