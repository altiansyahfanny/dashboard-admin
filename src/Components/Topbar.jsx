import React from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const Topbar = () => {
    return (
        <div className='fixed z-10 bg-white top-0 inset-x-0'>
            <div className='flex justify-between'>
                <div className='w-[320px] h-16 flex justify-center items-center gap-2'>
                    <div className='bg-cpns-primary-orange text-white font-bold text-2xl py-1 px-2 rounded-tl-2xl rounded-br-2xl'>
                        BISA
                    </div>
                    <div className=' text-cpns-primary-orange font-bold text-2xl'>
                        CPNS
                    </div>
                </div>
                <div className='flex items-center justify-between w-full px-8'>
                    <div>
                        <GiHamburgerMenu size={20} color='#9b9b9b' />
                    </div>
                    <div className=' flex items-center gap-4'>
                        <div className='border border-cpns-secondary-orange px-4 py-1 rounded-full flex items-center justify-center cursor-pointer'>
                            <span className='text-cpns-secondary-orange text-sm'>Hi, Altiansyah Fanny</span>
                        </div>
                        <div className='border border-cpns-secondary-orange px-4 py-1 rounded-full flex items-center justify-center cursor-pointer gap-1'>
                            <AiOutlineShoppingCart color='#a85800' />
                            <span className='text-cpns-secondary-orange text-sm'>0 Item</span>
                        </div>
                        <div className='bg-cpns-primary-orange w-8 h-8 flex items-center justify-center text-white rounded-full'>
                            AF
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar