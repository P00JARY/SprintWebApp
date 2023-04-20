import React from 'react';

import {FiMessageSquare} from 'react-icons/fi'
import {IoCall} from 'react-icons/io5'
import Dropdown from "./Dropdown";

function Navbar(props) {

    return (
        <div className='w-full h-16 bg-blue-200 rounded-full '>
            <div className='w-full h-full me-5'>
                <ul className='flex space-x-5   w-full h-full font-bold text-xl  justify-end px-4 '>
                    <li className='flex justify-center items-center me-auto '>portfolio</li>
                    <li className='flex justify-center items-center '>Open  Opportunities</li>
                    <li className='flex justify-center items-center '>Funds Available 50000
                        <button className='rounded-full bg-blue-600 text-xl px-2 mx-2 hover:bg-yellow-400 '>
                        +
                    </button></li>
                    <li className='flex justify-center items-center text-blue-950 '>|</li>
                    <li className='flex justify-center items-center '><FiMessageSquare size={30}  className='text-blue-800 cursor-pointer hover:text-red-600' /></li>
                    <li className='flex justify-center items-center '><IoCall size={30}  className='text-blue-800 cursor-pointer hover:text-red-600' /></li>
                    <li className='flex justify-center items-center '>
                        <Dropdown/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;