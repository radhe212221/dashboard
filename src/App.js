import React from 'react'
import SideBar from './comp/sidebar'
import TopBar from './comp/topbar'
import Section from './comp/section'
export default function App() {
    return (
        <div>
            <SideBar />
            <TopBar />
            <Section>
                this is section
            </Section>
        </div>
    )
}
