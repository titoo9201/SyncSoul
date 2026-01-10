import React,{useContext, useState} from 'react'
import {UserContext} from '../context/Usercontext';
import axios from '../config/axios';

const Home = () => {
  const {user}= useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectName, setprojectName] = useState(null)
  function createproject(e){
    e.preventDefault();
    axios.post('/projects/create',{name:projectName})
    .then((res)=>{
      setIsModalOpen(false);  
      // setprojectName('');
    })
    .catch((err)=>{
      console.log(err);
    });

    console.log({projectName});
    
    
  
  }
  return (
     <main className='bg-gray-50 min-h-screen flex flex-col items-center justify-center gap-[10px]'>
      <h1 className='text-3xl font-bold text-gray-800'>Welcome {user?.name || 'User'} to your profile</h1>

      <div className="projects flex justify-center items-center p-4">
        <button 
        onClick={() => setIsModalOpen(true)}
         className="project p-6 m-2 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-colors duration-200">

          <i className="ri-add-line text-4xl text-gray-400 mb-2"></i>
          <span className="text-gray-600">Create New Project</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Create New Project</h2>
        <form
        onSubmit={createproject}
        >
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
          Project Name
            </label>
            <input
            onChange={(e)=>setprojectName(e.target.value)}
            value={projectName}
          type="text"
          id="projectName"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          placeholder="Enter project name"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
          onClick={() => setIsModalOpen(false)}
            >
          Cancel
            </button>
            <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
          Create
            </button>
          </div>
        </form>
          </div>
        </div>
      )}

     </main>
  )
}

export default Home
