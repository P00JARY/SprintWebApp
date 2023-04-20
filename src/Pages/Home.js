import React from 'react';
import Navbar from "../Components/HomeComponents/Navbar";
import Card from "../Components/HomeComponents/Card";
import InvestBar from "../Components/HomeComponents/InvestBar";
import Investments from "../Components/HomeComponents/Investments";

function Home(props) {
    return (
        <div className=' mt-5  h-screen mx-52 space-y-4'>
            <Navbar/>
            <div className='h-72  flex justify-center px-10 space-x-10 py-5 '>
                <Card title='Portfolio value ' price='50,000 ' realized='unrealized - realized '/>
                <Card title='Total Investment ' price='80,000 ' realized='unrealized - realized '/>
                <Card title='Multiple ' price='65,000 ' realized='unrealized - realized '/>
            </div>

            <div className='bg-gray-100 px-10'>
                <div className='text-blue-800 text-4xl font-bold text-center'>Investments</div>
                <InvestBar/>
                <Investments/>
            </div>
        </div>
    );
}

export default Home;