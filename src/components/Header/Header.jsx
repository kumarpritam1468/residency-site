import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
    const [menuOpened, setMenuOpeneed] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 777) {
            return { right: !menuOpened && "-100%" };
        }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="" width={100} />
                <OutsideClickHandler onOutsideClick={()=>{setMenuOpeneed(false)}}>
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="#r-wrapper">Residencies</a>
                        <a href="#v-wrapper">Our Value</a>
                        <a href="#c-wrapper">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className='button'>
                            Contact
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => { setMenuOpeneed((prev) => !prev) }}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    )
}

export default Header