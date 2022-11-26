import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="bg-orange-100 min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-green-100 px-6 py-8 rounded-lg shadow-2xl text-black w-full">
                    <h1 className="mb-8 text-3xl text-green-600 text-center text- font-bold">Login</h1>
                    

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                    

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    
                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-yellow-800 focus:outline-none my-1"
                    >Login</button>

                    <p class="text-center pt-5 mb-4">Forgot password</p>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have account yet? {" "}
                    
                    <Link to="/Signup">Sign up</Link>
                    
                </div>
            </div>
        </div>
  )
}

export default Login