import React, { useState } from 'react'
import SearchIcon from '../icons/search-icon'
import BellIcon from '../icons/bell-icon'
import DropIcon from '../icons/dropdown-icon'
export default function Topbar() {
  const [show, setshow] = useState(false)
  return (
    <div className='bg-white py-2 fixed z-20 top-0 right-0 flex w-[84%] justify-between px-[2%] shadow-md'>
      <div className=''>
        <div className='flex p-2 bg-white items-center gap-2 border border-gray-600 rounded-md'>
          <div>
            <SearchIcon />
          </div>
          <div><input placeholder='Search by patients...' /></div>
        </div>
      </div>
      <div className='flex gap-10'>
        <div className='mt-2'>
          <BellIcon />
        </div>
        <ul className='relative'>
          <li onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
            <div className='flex items-center gap-2'>
              <img src="/avatar.png" />
              <span>Deko</span>
              <span>
                <DropIcon />
              </span>
            </div>
            {show && <ul className='absolute bg-white shadow-md p-2 w-[150px] -left-10'>
              <li>change password</li>
              <li>theme</li>
              <li>settings</li>
              <li>logout</li>
            </ul>}
          </li>
        </ul>
      </div>
    </div>
  )
}
