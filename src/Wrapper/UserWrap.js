import React from 'react'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'
import { AiOutlineCopyright } from 'react-icons/ai'

const UserWrap = (Component, idName, classNames) => function HOC() {
    return (
        <>
            <Topbar />
            <div className='flex justify-between mt-16'>
                <Sidebar />
                <div className='bg-gray-100 w-full relative'>
                    <div className='p-7'>
                        <Component />
                    </div>
                    <div className='absolute left-0 right-0 bottom-0 p-[28px] py-6 border-t flex items-center justify-center'>
                        <span className='text-xs flex items-center gap-1 text-gray-700'>Copyright <AiOutlineCopyright size={10} /> 2022 <span className='text-cpns-secondary-orange font-medium text-xs'>BISACPNS</span>. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserWrap