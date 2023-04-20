import React from 'react';
import Sidebar from "./Sidebar";
import CreateInfo from "./CreateInfo";

function CreatePage(props) {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className='  w-8/12 h-4/5 rounded-3xl overflow-hidden p-5 bg-white'>
            <div className=' grid grid-cols-2  h-full rounded-3xl '>
                <Sidebar/>
                <CreateInfo/>
            </div>
        </div>
        </div>
    );
}

export default CreatePage;