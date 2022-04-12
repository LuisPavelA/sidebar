import React from 'react'
import leftValueType from "../../types/leftValue"
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import StoreIcon from '@mui/icons-material/Store';

const SidebarClosed = () => {
  return (
    <div className={("h-full w-24 transition-all bg-slate-800 absolute top-0 left-0")}>
      <h1 className='text-center text-gray-300 text-sm font-bold mt-4'>
        Dashboard
      </h1>
      <div className='h-0.5 w-14 bg-gray-300 mx-auto mt-5'></div>
      <div className='text-center'>
        <div>
          <a href="/">
            <button className='w-full h-auto bg-slate-800 py-2 mt-4 transition-all hover:bg-slate-700'>
              <div>
                <ArticleIcon className="text-gray-300 my-auto"/>
              </div>
              <h1 className='text-sm text-gray-300 font-bold'>Summary</h1>
            </button>
          </a>
        </div>

        <div>
          <a href="/">
            <button className='w-full h-auto bg-slate-800 py-2 mt-4 transition-all hover:bg-slate-700'>
              <div>
                <GroupIcon className="text-gray-300 my-auto"/>
              </div>
              <h1 className='text-sm text-gray-300 font-bold'>Users</h1>
            </button>
          </a>
        </div>

        <div>
          <a href="/">
            <button className='w-full h-auto bg-slate-800 py-2 mt-4 transition-all hover:bg-slate-700'>
              <div>
                <StoreIcon className="text-gray-300 my-auto"/>
              </div>
              <h1 className='text-sm text-gray-300 font-bold'>Sales</h1>
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default SidebarClosed
