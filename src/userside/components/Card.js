import React from 'react'

export default function Card(props) {
    return (
        <div className='Card bg-light-purple text-color'>
            <div className='heading'>{props.heading}</div>
            <div className='middletext'>{props.middletext}</div>
            <div className='bottomtext'>{props.bottomtext}</div>
        </div>
    )
}
