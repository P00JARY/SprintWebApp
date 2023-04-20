import React from 'react';
import data from '../../Data/fundData.json'
import InvestInfo from "./InvestInfo";

function Investments(props) {
    return (
       <div >
           <div className='  w-full grid grid-cols-5 font-bold text-2xl my-3'>
               <div>Company Fund</div>
               <div>Status</div>
               <div>Date</div>
               <div>Invested</div>
               <div>{"<>"}Net Value</div>
           </div>
           {
               data.map((data,i)=>(
               <InvestInfo CompanyFund={data.companyFund}
                           Status={data.status}
                           Date={data.Date}
                           Invested={data.Invested}
                           NetValue={data.NetValue} />
               ))
           }
       </div>


    );
}

export default Investments;