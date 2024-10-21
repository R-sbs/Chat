import { useState } from "react"
import { Link } from "react-router-dom"
import useSignUp from "../../hooks/useSignUp.js"


const SignUp = () => {

    const [inputs, setInputs] = useState({
        username: '',
        gender: 'male',
        email: '@gmail.com',
        password: '123456',
        confirmPassword: '123456',
    })

    const { loading, signup } = useSignUp();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }


    return (
        <div className="flex flex-col min-w-96 mr-auto h-full items-center justify-center px-10 py-16">
            <div className="p-12 shadow-md bg-gray-200  w-full min-w-96 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 ">
                <h1 className="text-3xl text-gray-300 font-semibold text-center pb-6">Sign Up
                    <span className="text-blue-400 pl-4">Chat App</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-6 flex-col sm:flex-row'>
                        <p className='flex flex-col'>

                            <label className="label p-2">
                                <span className="text-base label-text">Username *</span>
                            </label>
                            <input type="text" className="w-full input input-bordered h-10" placeholder="Enter Your Username"
                                value={inputs.username} onChange={(e) => {
                                    setInputs({ ...inputs, username: e.target.value })
                                }} />

                        </p>

                        <label className="form-control w-half max-w-xs">
                            <div className="label">
                                <span className="label-text text-base">Gender</span>

                            </div>
                            <select className="select select-sm select-bordered h-10" value={inputs.gender} onChange={(e) => {
                                setInputs({ ...inputs, gender : e.target.value})
                             }}>
                                <option disabled value="">Pick one</option>
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
                        <input type="email" className="w-full input input-bordered h-10" placeholder="Enter Your email"
                            value={inputs.email} onChange={(e) => {
                                setInputs({ ...inputs, email: e.target.value })
                            }} />
                    </div>

                    <div className="mt-1">
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" className="w-full input input-bordered h-10" placeholder="Enter Your Password" value={inputs.password} onChange={(e) => {
                            setInputs({ ...inputs, password: e.target.value })
                        }} />
                    </div>
                    <div className="mt-1">
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" className="w-full input input-bordered h-10" placeholder="Enter Your Password" value={inputs.confirmPassword} onChange={(e) => {
                                setInputs({ ...inputs, confirmPassword : e.target.value})
                             }}/>
                    </div>
                    <Link to='/login' className="text-sm  my-2 inline-block">Have an Account? <span className="hover:underline text-slate-300 hover:text-white">Login</span></Link>
                    <div>
                        <button className="btn btn-sm btn-wide text-white md:btn-md  mt-4" disabled={loading}>
                          { loading ? <span className="loading loading-spinner"></span> : "Register" }
                            </button>
                    </div>
                </form>


            </div>


        </div>
    )
}

export default SignUp

