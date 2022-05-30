import React, { useEffect, useState } from 'react'
import Actionicons from '../icons/action-icons'
export default function Datagrid() {
    const [a,seta]=useState([])

    const boot=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(d=>d.json())
        .then(d=>seta(d))
    }

    useEffect(boot,[])
    return (
        <div className='bg-white m-2 p-3 rounded-md'>
            <div className='flex items-center justify-between px-5'>
                <div>Department List</div>
                <div>
                    <button className='text-sm p-2 px-5 bg-[#8146FF] rounded-md text-white'>Add Department</button>
                </div>
            </div>
            <div className='mt-5'>
                <table className='text-gray-500 w-full text-sm' cellPadding={10}>
                    <tr>
                        <td className='text-light text-sm text-left'>Department Name</td>
                        <td className='text-light text-sm text-left'>Doctor</td>
                        <td className='text-light text-sm text-left'>Gender</td>
                        <td className='text-light text-sm text-left'>Head Of Department</td>
                        <td className='text-light text-sm text-left'>Action</td>
                        <td className='text-light text-sm text-left'>Status</td>
                    </tr>
                    {a.map(x => <tr key={x.id}>
                        <td className='text-left'>ICU</td>
                        <td className='flex gap-2 items-center'>
                            <img src="/avatar.png" />
                            <span>{x.name}</span>
                        </td>
                        <td>{x.username}</td>
                        <td>{x.company.name}</td>
                        <td>
                            <Actionicons />
                        </td>
                        <td>
                            <span className='bg-green-50 text-green-400 p-2 text-[10px] uppercase'>active</span>
                        </td>
                    </tr>)}
                </table>
            </div>
        </div>
    )
}
