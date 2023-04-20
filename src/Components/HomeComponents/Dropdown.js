import React, { useState } from "react";
import {MdOutlinePerson2} from "react-icons/md";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block ">
            <button
                type="button"
                className="inline-flex justify-center "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"


            >
                <MdOutlinePerson2
                size={33}
                className='text-blue-800 cursor-pointer hover:text-red-600'
                onMouseEnter={toggleDropdown}

            />

            </button>

            {/* Dropdown menu */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
                onMouseLeave={toggleDropdown}
            >
                <div className="py-1 ">
                    <a
                        href="/"
                        className="block text-blue-700 px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                    >
                        My Profile
                    </a>
                    <hr/>
                    <a
                        href="/"
                        className="block text-blue-700 px-4 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                    >
                       Settings
                    </a>
                    <hr/>
                    <a
                        href="/"
                        className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                    >
                        LogOut
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
