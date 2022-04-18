import React from 'react'
import { Link } from 'react-router-dom'

function Navlink({ active, icon, text, href = '' }) {
    return (
        <div className='relative'>
            <div className={`w-1 top-0 bottom-0 absolute ${(href === active) ? 'bg-cpns-primary-orange' : 'bg-transparent'}`} />
            <Link to={href} className='hover:bg-orange-100 cursor-pointer py-3 px-5  flex items-center gap-4'>
                {icon}
                <span className={`text-sm font-medium ${(href === active) ? 'text-gray-500' : 'text-gray-900'}`}>{text}</span>
            </Link>
        </div>
    )
}

export default Navlink