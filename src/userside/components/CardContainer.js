import React from 'react'
import Card from './Card'

export default function CardContainer() {
    return (
        <div className='CardContainer   '>
            <Card heading="Portfolio Value"
                middletext="5,00,000"
                bottomtext="700k unrealized -790k realized" />
            <Card heading="Total Invested"
                middletext="8,00,000"
                bottomtext="126 Investments 12 Startups 5 funds" />
            <Card heading="Multiple "
                middletext="1.00x"
                bottomtext="-0.1% IRR* Effective duration <1year" />
        </div>
    )
}
