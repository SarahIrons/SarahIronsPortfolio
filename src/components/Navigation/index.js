import React, {useState} from 'react';
import './styles.scss';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link  } from 'react-router-hash-link'

const NavigationPanel = (props) => {

    const [isOpen, setIsOpen] = useState('nav--close');

    return (  
    <>
        <div className="navbar--container sticky">
            <div className="navbar--title"><h4>navigation</h4></div>
            <button aria-label="open nav menu" onClick={()=>{setIsOpen('')}} className="nav__button--open nav__button"><FontAwesomeIcon icon={faBars}/></button>
        </div>
        <div className={`nav ${isOpen} sticky`}>
            <button  aria-label="close nav menu" onClick={()=>{setIsOpen('nav--close')}} className="nav__button--close nav__button"><FontAwesomeIcon icon={faXmark} /></button>
            <div className="nav--open-title">explore</div>
            <div className="nav--open-menu">
                <Link smooth to="./#about">about</Link>
                <Link smooth to="./#work">work</Link>
                <Link smooth to="./#skills">skills</Link>
                <Link smooth to="./#contact">contact</Link>
            </div>
        </div>
    </>
  )
}

export default NavigationPanel;