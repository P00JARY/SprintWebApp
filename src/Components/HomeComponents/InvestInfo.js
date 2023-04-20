import React from 'react';

function InvestInfo(props) {
    return (
        <div className='w-full space-y-1 grid grid-cols-5  text-xl'>
            <div>{props.CompanyFund}</div>
            <div>{props.Status}</div>
            <div>{props.Date}</div>
            <div>{props.Invested}</div>
            <div>{props.NetValue}</div>
            <hr/>
        </div>
    );
}

export default InvestInfo;