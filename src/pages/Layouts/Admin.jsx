import React from 'react';


export default function Admin(props) {

    return (

        <div className='font-Poppins bg-gray-50 pb-48'>
            <div className='min-h-screen flex relative'>
                <div className='relative w-[235px]'>
                    <div className="fixed bg-white left-0 bottom-0 top-16 w-[235px] max-h-screen overflow-y-scroll no-scrollbar">
                        <div className='px-8 py-4'>
                            Sidebar
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    Topbar
                    <div className='px-8 py-4'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
