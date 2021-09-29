import React, { MouseEvent } from 'react';
import './Button.css';


interface MyButton {
    label: string;
    handleButton: Function;
}

const Button = ({label}: MyButton) => {
    
    const handleClick = (event: MouseEvent) => {
        let cardItemTitle = event.currentTarget.parentNode?.firstChild;

        console.log('You choose: ', cardItemTitle?.textContent);
    }
    return (
        <button onClick={handleClick}>{label}</button>
    ) 
}

export default Button;