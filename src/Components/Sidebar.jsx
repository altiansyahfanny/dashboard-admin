import React from 'react'
import Navlink from './Navlink'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiMonitor } from 'react-icons/fi'
import { FaRegAddressCard } from 'react-icons/fa'
import { BsPencilSquare } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { MdSupervisorAccount } from 'react-icons/md'
import { HiOutlineDocumentText, HiOutlineDocumentDuplicate } from 'react-icons/hi'
import NavMenu from './NavMenu'
import NavlinkDropdown from './NavlinkDropdown'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useLocation } from 'react-router-dom'


const Sidebar = () => {
    const { pathname } = useLocation();
    const splitPathname = pathname.split('/');
    return (
        <div className='w-[320px] border-gray-200'>
            <ul className='py-0'>
                <div className="border-b-2">
                    <Navlink active={pathname} href={'/'} icon={<AiOutlineHome size={18} />} text='Home' />
                    <Navlink active={pathname} href={'/belajar-pppk'} icon={<FiMonitor size={18} />} text='Belajar PPPK' />
                </div>
                <div className="border-b-2">
                    <NavMenu text='Program Khusus' />
                    <NavlinkDropdown active={splitPathname} pathname='program-pemantapan' icon={<HiOutlineDocumentText size={18} />} text={'Program Pemantapan'} />
                    <NavlinkDropdown active={splitPathname} pathname='/none' icon={<HiOutlineDocumentText size={18} />} text='Program Saya' />
                </div>
                <div className="border-b-2">
                    <NavMenu text='Pemebelian' />
                    <Navlink active={pathname} icon={<HiOutlineDocumentText size={18} />} text='Beli Paket SKD' />
                    <Navlink active={pathname} icon={<HiOutlineDocumentText size={18} />} text='Beli Paket SKB' />
                    <Navlink active={pathname} icon={<AiOutlineShoppingCart size={18} />} text='Keranjang SKB' />
                    <Navlink active={pathname} icon={<MdOutlineAccountBalanceWallet size={18} />} text='Invoice & Pembayaran' />
                </div>
                <div className="border-b-2">
                    <NavMenu text='Menu SKD' />
                    <NavlinkDropdown active={splitPathname} pathname='/none' icon={<HiOutlineDocumentText size={18} />} text='Materi SKD' />
                    <NavlinkDropdown active={splitPathname} pathname='/none' icon={<HiOutlineDocumentDuplicate size={18} />} text='Latihan SKD' />
                    <NavlinkDropdown active={splitPathname} pathname='/none' icon={<HiOutlineDocumentDuplicate size={18} />} text='Tryout SKD' />
                </div>
                <div className="border-b-2">
                    <NavMenu text='Menu SKB' />
                    <NavlinkDropdown active={splitPathname} pathname='/none' icon={<HiOutlineDocumentDuplicate size={18} />} text='Tryout SKB' />
                </div>
                <div className="border-b-2">
                    <NavMenu text='Event Tryout' />
                    <Navlink active={pathname} icon={<BsPencilSquare size={18} />} text='Event Tryout' />
                </div>
                <div className="border-b-2">
                    <NavMenu text='Bimbel' />
                    <Navlink active={pathname} icon={<FaRegAddressCard size={18} />} text='Kelas Saya' />
                    <Navlink active={pathname} icon={<BsPencilSquare size={18} />} text='Tryout Bimbel' />
                    <Navlink active={pathname} icon={<FiMonitor size={18} />} text='Video Pertemuan' />
                </div>
                <div className="border-none">
                    <NavMenu text='Akun' />
                    <Navlink active={pathname} icon={<MdSupervisorAccount size={18} />} text='Referral' />
                    <Navlink active={pathname} icon={<VscAccount size={18} />} text='Akun Saya' />
                </div>
            </ul>
        </div>
    )
}

export default Sidebar