

const SignUp = () => {
    return (
        <div className="flex flex-col min-w-96 mr-auto h-full items-center justify-center px-10 py-16">
            <div className="p-12 shadow-md bg-gray-200  w-full min-w-96 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 ">
                <h1 className="text-3xl text-gray-300 font-semibold text-center pb-6">Sign Up
                    <span className="text-blue-400 pl-4">Chat App</span>
                </h1>
                <form>
                    <div className='flex gap-6 flex-col sm:flex-row'>
                        <p className='flex flex-col'>

                            <label className="label p-2">
                                <span className="text-base label-text">Username *</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder="Enter Your Username" />

                        </p>

                            <label className="form-control w-half max-w-xs">
                                <div className="label">
                                    <span className="label-text text-base">Gender</span>
                                   
                                </div>
                                <select className="select select-sm select-bordered h-10">
                                    <option disabled selected>Pick one</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='others'>Others</option>
                                </select>
                            </label>
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Email *</span>
                        </label>
                        <input type="email" className="w-full input input-bordered h-10" placeholder="Enter Your email" />
                    </div>

                    <div className="mt-1">
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="w-full input input-bordered h-10" placeholder="Enter Your Password" />
                    </div>
                    <div className="mt-1">
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" className="w-full input input-bordered h-10" placeholder="Enter Your Password" />
                    </div>
                    <a href="#" className="text-sm  my-2 inline-block">Have an Account? <span className="hover:underline text-slate-300 hover:text-white">Login</span></a>
                    <div>
                        <button className="btn btn-sm btn-wide text-white md:btn-md  mt-4">Register</button>
                    </div>
                </form>


            </div>


        </div>
    )
}

export default SignUp
