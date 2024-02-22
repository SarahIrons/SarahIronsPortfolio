import React from 'react';
import './styles.scss';
import RevealEffectItem from './RevealEffectItem';

// destructuring an object in JS, and destructuring props in a React Component 
const RevealEffect = ({id, className, listItems=[] }) => {

    return (
        <ul id={id} className={`reveal-effect ${className}`}> 
            {
                listItems.map((item)=>{
                    return <RevealEffectItem item={item}/>
                })
            }
        </ul>
     )
}

export default RevealEffect;