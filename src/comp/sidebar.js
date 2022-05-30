import React, { useState } from 'react'
import SettingIcon from '../icons/sett-icon'
import Dashicon from '../icons/dash-icon'
import Appicon from '../icons/app-icon'
import Docicon from '../icons/doc-icon'
import Depicon from '../icons/dep-icon'
import Paticon from '../icons/pat-icon'
import Chaticon from '../icons/chat-icon'
import Callicon from '../icons/call-icon'
export default function Sidebar() {
  const [state, setstate] = useState({
    label: "Doctors"
  })
  const selected = x => {
    return x?.label === state?.label
  }

  const menus = [
    { label: "Dashboard", icon: <Dashicon color={selected('Dashboard') ? '#8146FF' : '#A6ACB8'} /> },
    { label: "Appointment", icon: <Appicon color={selected('Appointment') ? '#8146FF' : '#A6ACB8'} /> },
    { label: "Doctors", icon: <Docicon color={selected('Doctors') ? '#8146FF' : '#A6ACB8'} /> },
    { label: "Departments", icon: <Depicon color={selected('Departments') ? '#8146FF' : '#A6ACB8'} /> },
    { label: "Patients", icon: <Paticon color={selected('Patients') ? '#8146FF' : '#A6ACB8'} /> },
    { label: "Chats", icon: <Chaticon color={selected('Chats') ? '#8146FF' : '#A6ACB8'} /> },
    { label: "Calls", icon: <Callicon color={selected('Calls') ? '#8146FF' : '#A6ACB8'} /> },
  ]
  const handleClick = (menuitem) => {
    setstate(menuitem)
  }

  return (
    <div className='bg-white w-[15%] h-full shadow-lg transition-all p-2 flex-col ' >
      <div className='flex-1 h-[70%]'>
        <div className='mb-10'>
          <img src="/logo.svg" />
        </div>
        <div>
          <ul>
            {menus.map(x => <li onClick={() => handleClick(x)} className={`
            flex cursor-pointer p-2 gap-2  border rounded-md transition-all ${selected(x) ? 'bg-gray-50' : 'border-white bg-white'} `}>
              <div>{x.icon}</div>
              <span className={selected(x) ? 'text-[#8146FF]' : ''}>{x.label}</span>
            </li>)}
          </ul>
        </div>
        <div className='mt-5'>
          <button className='p-2 px-5 bg-[#8146FF] rounded-md text-white'>+ register Patients</button>
        </div>
      </div>
      <div className=''>
        <div className='mb-4'>
          <img src="/sample-pic.svg" />
        </div>
        <div>
          <ul>
            <li
              onClick={() => handleClick({ label: "Settings" })}
              className={`
            flex cursor-pointer p-2 gap-2  border rounded-md transition-all ${selected({ label: "Settings" }) ? 'bg-gray-50' : 'border-white bg-white'} `}>
              <div><SettingIcon /></div>
              <span className={selected({ label: "Settings" }) ? 'text-[#8146FF]' : ''}>Settings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
