import React from 'react'
import Actionicons from '../icons/action-icons'
export default function Datagrid() {
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
                    {[1, 2, 3, 4, 5].map(x => <tr key={x}>
                        <td className='text-left'>ICU</td>
                        <td className='flex gap-2 items-center'>
                            <img src="/avatar.png" />
                            <span>Maria Anders</span>
                        </td>
                        <td>Male</td>
                        <td>Maria Anders</td>
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
