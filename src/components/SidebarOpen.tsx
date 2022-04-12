import React from 'react'
import leftValueType from "../../types/leftValue"
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import StoreIcon from '@mui/icons-material/Store';

const Sidebar: React.FC = () => {
  return (
    <div className={("h-screen w-72 transition-all bg-slate-800 absolute top-0 left-0")}>
      <h1 className='text-center text-gray-300 text-3xl font-bold mt-4'>
        Dashboard
      </h1>
      <div className='h-0.5 w-44 bg-gray-300 mx-auto mt-5'></div>
      <div className='mt-4 text-center'>
        <div>
          <a href="/">
            <button className='w-full h-auto bg-slate-800 mx-auto py-2 mt-4 transition-all flex space-x-5 hover:bg-slate-700'>
              <ArticleIcon className="text-gray-300 my-auto ml-6"/>
              <h1 className='text-2xl text-gray-300 font-bold'>Summary</h1>
            </button>
          </a>
        </div>

        <div>
          <a href="/users">
            <button className='w-full h-auto bg-slate-800 mx-auto py-2 mt-4 transition-all flex space-x-5 hover:bg-slate-700'>
              <GroupIcon className="text-gray-300 my-auto ml-6"/>
              <h1 className='text-2xl text-gray-300 font-bold'>Users</h1>
            </button>
          </a>
        </div>

        <div>
          <a href="/sales">
            <button className='w-full h-auto bg-slate-800 mx-auto py-2 mt-4 transition-all flex space-x-5 hover:bg-slate-700'>
              <StoreIcon className="text-gray-300 my-auto ml-6"/>
              <h1 className='text-2xl text-gray-300 font-bold'>Sales</h1>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
