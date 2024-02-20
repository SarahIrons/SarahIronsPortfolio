import React, {useState} from 'react';
import './styles.scss';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationPanel = (props) => {

    const [isOpen, setIsOpen] = useState('close');

    return (  
    <>
        <div className="navbar--container sticky">
            <div className="navbar--title"><h4>navigation</h4></div>
            <button onClick={()=>{setIsOpen('open')}} className="navbar--icon"><FontAwesomeIcon icon={faBars}/></button>
        </div>
        <div className={`nav--open ${isOpen} sticky`}>
            <button onClick={()=>{setIsOpen('close')}} className="nav--open-icon"><FontAwesomeIcon icon={faXmark} /></button>
            <div className="nav--open-title">explore</div>
            <div className="nav--open-menu">
                <a href="#about">about</a>
                <a href="#work">work</a>
                <a href="#skills">skills</a>
                <a href="#contact">contact</a>
            </div>
        </div>
    </>
  )
}

export default NavigationPanel;