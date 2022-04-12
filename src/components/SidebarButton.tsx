import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const SidebarButton: React.FC<any> = ({ buttonLeftValue, toggleLeftValue }) => {
  return (
    <button onClick={toggleLeftValue} className={("w-10 h-10 px-2 bg-slate-700 mx-auto py-2 rounded-md mt-4 transition-all absolute top-0 hover:bg-slate-600 "  + buttonLeftValue)}>
        <h1 className='text-white flex'>
            <MenuIcon />
        </h1>
    </button>
  )
}

export default SidebarButton
