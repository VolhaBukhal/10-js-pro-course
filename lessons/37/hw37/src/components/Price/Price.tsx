import React from 'react'
import './Price.css';

interface MyPrice {
    price: string;
    period: string;
}

const Price = ({price, period}: MyPrice) => {
    return (
        <div className='price'>
           <p>
                <span className="item-price">$ {price}</span> / {period}
           </p>
        </div>
    )
}

export default Price