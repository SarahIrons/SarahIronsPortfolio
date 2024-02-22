import React, {useState} from 'react';
import { InView } from 'react-intersection-observer';


// destructuring an object in JS, and destructuring props in a React Component 
// Intersection Observer 
// useState
const RevealEffectItem = ({item}) => {
    const [itemPostViewClass, setItemPostViewClass]= useState('')
    
    const updateClass = (shouldUpdateClass) =>{ 
        if(itemPostViewClass !== 'reveal-effect__item--been-viewed' && shouldUpdateClass)
        setItemPostViewClass('reveal-effect__item--been-viewed')
    }

    return <InView as='li' className={`reveal-effect__item ${itemPostViewClass}`} onChange={(isInView)=>updateClass(isInView)} >
        <span className='reveal-effect__text'>{item}</span>
    </InView>
    
}

export default RevealEffectItem;