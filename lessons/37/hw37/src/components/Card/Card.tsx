import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader';
import CardList from '../CardList';
import Button from '../Button';
import Price from '../Price';

interface MyCard {
    title: string,
    classBg?: string,
    price: string,
    period: string,
    data: string[],
    
}
const Card = ({title, classBg, price, period, data}: MyCard) => {
    const cardItem = "card-item";
   
    return (<div className={classBg ? `card-item ${classBg}` : cardItem}>
        <CardHeader title={title} className={classBg}/>
        <CardList data={data}/>
        <Price price={price} period={period}/>
        <Button 
           handleButton={() => console.log('hello')}
               
        label="Choose"/>
        </div>
    )
} 


// const Card = ({data}:any) => {
//     let elements = data.map( (item: any) => {
//         const cardItem = "card-item";
//         return ( 
//             <div className={item.classBg ? `card-item ${item.classBg}` : cardItem}>
//                 <CardHeader title={item.title} className={item.classBg}/>
//                 <CardList data={item.data}/>
//                 <Price price={item.price} period={item.period}/>
//                 <Button label="Choose"/>
//             </div>
//          )
//     } )
//     return (
//         <>
//             {elements}
//         </>
//     )
// } 

export default Card;