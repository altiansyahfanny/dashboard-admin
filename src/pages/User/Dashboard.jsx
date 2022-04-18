import React from 'react';
import UserWrap from '../../Wrapper/UserWrap';
import { AiFillInfoCircle } from 'react-icons/ai'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Dashboard = (props) => {

    return (
        <div>
            <div className='p-[28px] bg-white rounded-lg'>
                <div className='bg-orange-200 border border-cpns-secondary-orange py-3 px-5 rounded'>
                    <div className='flex items-center gap-1'>
                        <AiFillInfoCircle size={18} color={'#a85800'} />
                        <span className='text-cpns-secondary-orange font-medium'>INFO :</span>
                    </div>
                    <ul className='mt-1'>
                        <li className='text-md text-cpns-secondary-orange'>
                            <span className='font-medium'>INFO - </span> Follow instagram @altynsyhf untuk update informasi seputar CPNS dan layanan.
                        </li>
                        <li className='text-md text-cpns-secondary-orange'>
                            <span className='font-medium'>HIMBAUAN - </span> Kami sarankan menggunakan browser Chrome versi terbaru supaya lancar dan tidak ada kendala.
                        </li>
                    </ul>
                </div>
                <div className='flex justify-between gap-6 mt-4'>
                    <div className='bg-gradient-to-r from-purple-600 to-blue-400 h-28 w-full rounded-lg flex flex-col items-center justify-center'>
                        <span className='text-white font-light'>Paket SKD Tersedia</span>
                        <span className='text-white font-semibold text-3xl '>3</span>
                    </div>
                    <div className='bg-gradient-to-r from-pink-600 to-pink-400 h-28 w-full rounded-lg flex flex-col items-center justify-center'>
                        <span className='text-white font-light'>Tryout SKB Tersedia</span>
                        <span className='text-white font-semibold text-3xl '>200</span>
                    </div>
                    <div className='bg-gradient-to-r from-orange-500 to-orange-300 h-28 w-full rounded-lg flex flex-col items-center justify-center'>
                        <span className='text-white font-light'>Tryout SKB Dibeli</span>
                        <span className='text-white font-semibold text-3xl '>0</span>
                    </div>
                    <div className='bg-gradient-to-r from-blue-700 to-blue-400 h-28 w-full rounded-lg flex flex-col items-center justify-center'>
                        <span className='text-white font-light'>Refferal Aktif</span>
                        <span className='text-white font-semibold text-3xl '>0</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-8 gap-4'>
                <div className='bg-blue-800 flex items-center justify-between rounded overflow-hidden cursor-pointer'>
                    <div className='bg-blue-900 p-4'>
                        <BsFacebook size={14} color='white' />
                    </div>
                    <span className='text-sm text-white font-medium px-6'>Facebook BISACPNS</span>
                </div>
                <div className='bg-pink-600 flex items-center justify-between rounded overflow-hidden cursor-pointer'>
                    <div className='bg-pink-700 p-4'>
                        <BsInstagram size={14} color='white' />
                    </div>
                    <span className='text-sm text-white font-medium px-6'>Instagram BISACPNS</span>
                </div>
            </div>
        </div>
    )
}

export default UserWrap(
    Dashboard,
    'about',
    'app__whitebg',
);
