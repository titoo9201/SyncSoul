import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from '../config/axios';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handlesubmit(e){
        e.preventDefault();
        axios.post('/users/login',{email,password})
        .then((res)=>{
            navigate('/');
        })
        .catch((err)=>{
            console.log(err);
        })


    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      {/* SyncSoul Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 hover:from-blue-300 hover:to-cyan-300 transition-all duration-300">
          SyncSoul
        </h1>
        <p className="text-gray-400 text-sm">Stay connected, stay synced</p>
      </div>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700 hover:border-blue-500/50 transition-all duration-300">

        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Login
        </h2>

        <form
        onSubmit={handlesubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-400 mb-2 font-semibold text-sm">
              Email
            </label>
            <input
             onChange={(e) => setEmail(e.target.value)}
             
              type="email"
              id="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-650 transition-all duration-200 border border-transparent hover:border-gray-600"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 mb-2 font-semibold text-sm">
              Password
            </label>
            <input
            onChange={(e)=> setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-650 transition-all duration-200 border border-transparent hover:border-gray-600"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 active:scale-95 transform"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline transition-colors duration-200">
            Create one
          </Link>
        </p>

      </div>
    </div>
  );
}
