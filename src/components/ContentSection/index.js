import React from 'react';
import './styles.scss';

const ContentSection = (props) => {
    return (<section id={props.id} className={`content-section ${props.className}`}> 
    {props.children}
     </section>)
}

export default ContentSection;
