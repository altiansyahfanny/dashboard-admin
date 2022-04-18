import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom';

const NavlinkDropdown = ({ active, icon, text, pathname }) => {
    const [open, setOpen] = useState(false);
    // console.log(active)

    const Navlink = ({ text, onClick, to }) => {
        return (
            <Link to={to} className='hover:bg-orange-100 cursor-pointer py-3 px-5  flex items-center gap-4' onClick={onClick}>
                <IoIosArrowDown size={18} className='opacity-0' />
                <span className={`text-sm font-medium ${to.split('/')[2] === active[2] ? 'text-gray-500' : 'text-gray-900'}`}>{text}</span>
            </Link>
        )
    }
    const navlink = (param) => {
        switch (param) {
            case 'Program Pemantapan':
                return (
                    <>
                        <Navlink to={'/program-pemantapan/skd'} text='Program Pemantapan SKD' onClick={() => setOpen(false)} />
                        <Navlink to={'/program-pemantapan/skb'} text='Program Pemantapan SKB' onClick={() => setOpen(false)} />
                    </>
                )
            case 'Program Saya':
                return (
                    <>
                        <Navlink to={'/'} text='Program SKD Saya' onClick={() => setOpen(false)} />
                        <Navlink to={'/'} text='Program SKB Saya' onClick={() => setOpen(false)} />
                    </>
                )
            case 'Materi SKD':
                return (
                    <>
                        <Navlink to={'/'} text='Materi Text' onClick={() => setOpen(false)} />
                        <Navlink to={'/'} text='Materi Video' onClick={() => setOpen(false)} />
                        <Navlink to={'/'} text='Kalkulator TIU' onClick={() => setOpen(false)} />
                    </>
                )
            case 'Latihan SKD':
                return (
                    <>
                        <Navlink to={'/'} text='Kerjakan Latihan' onClick={() => setOpen(false)} />
                        <Navlink to={'/'} text='Hasil Latihan' onClick={() => setOpen(false)} />
                    </>
                )
            case 'Tryout SKD':
                return (
                    <>
                        <Navlink to={'/'} text='Tryout Gratis' onClick={() => setOpen(false)} />
                        <Navlink to={'/'} text='Tryout Premium' onClick={() => setOpen(false)} />
                        <Navlink to={'/'} text='Tryout Platinum' onClick={() => setOpen(false)} />
                        <Navlink to={'/'} text='Hasil Tryout' onClick={() => setOpen(false)} />
                    </>
                )
            case 'Tryout SKB':
                return (
                    <>
                        <Navlink to={'/'} text='Tryout Saya' onClick={() => setOpen(false)} />
                        <Navlink to={'/'} text='Hasil Tryout' onClick={() => setOpen(false)} />
                    </>
                )

            default:
                return '';
        }
    }

    return (
        <>
            <div className='relative'>
                <div className={`w-1 inset-y-0 absolute ${(pathname === active[1]) ? 'bg-cpns-primary-orange' : 'bg-transparent'}`} />
                <div className='hover:bg-orange-100 cursor-pointer py-3 px-5  flex items-center justify-between' onClick={() => setOpen(!open)}>
                    <div className='flex items-center gap-4'>
                        {icon}
                        <span className={`text-sm font-medium ${(pathname === active[1]) ? 'text-gray-500' : 'text-gray-900'}`}>{text}</span>
                    </div>
                    <IoIosArrowDown className={`${open ? 'rotate-180' : ''} transition-all duration-300`} />
                </div>
            </div>
            <div className={`transition-all duration-300 overflow-hidden  bg-white rounded z-10 ${open ? 'max-h-60' : 'max-h-0'}`}>
                {navlink(text)}
            </div>
        </>
    )
}

export default NavlinkDropdown