
import React from 'react';
import SearchBar from "../components/SearchBar"

const InvestmentContainer = () => {
    return (
        <div className="investmentContainer bg-light-purple p-sm-4">
            <h1 className="d-flex justify-content-center text-color">Investments</h1>
            <SearchBar />
            <table>
                <tr>
                    <th>Company Fund</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Invested</th>
                    <th className='d-flex justify-content-end'>Net Value</th>
                </tr>
                <tr className='top-row'>
                    <td>206 INVESTMENTS</td>
                    <td></td>
                    <td></td>
                    <td>45,00,000</td>
                    <td></td>
                </tr>
            </table>
        </div>
    );
};

export default InvestmentContainer;
