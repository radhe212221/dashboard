import React from 'react'
import SideBar from './comp/sidebar'
import TopBar from './comp/topbar'
import Section from './comp/section'
import Chart from './comp/chart'
import DataGrid from './comp/data-grid'
export default function App() {
    return (
        <div>
            <SideBar />
            <TopBar />
            <Section>
                <div className='flex gap-2'>
                    <div className=' bg-white m-2'>
                        <Chart />
                    </div>
                    <div className=' bg-white m-2'>
                        <Chart type="line" />
                    </div>
                </div>
                <DataGrid data={[]} />
            </Section>
        </div>
    )
}
