'use client'

import React, { useState } from 'react';
import '../../styles/Header_search.css';
export default function Header_search() {
    const [isMenu_2Open, setIsMenu_2Open] = useState(false);

    const toggleMenu_2 = () => {
        setIsMenu_2Open(!isMenu_2Open);
    };
    return (
        <div className='Search_bar_container'>
            <div className="search-bar">
                <div className="label">URDU DICTIONARY</div>
                <img 
                        className="short_logo_urdu" 
                        src="https://english-nepali.com/urdu/logo/urdu-sm.png" 
                        alt="Small Urdu Dictionary Logo" 
                />
                <div className="search_field">
                    <input type="text" placeholder="Search for words" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
                <div className="icon_2" onClick={toggleMenu_2}>
                    <i className="fa fa-bars"></i>
                </div>
                <ul className={`nav_menu_2 ${isMenu_2Open ? 'active' : ''}`}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#list">Word List</a></li>
                            <li><a href="#history">Word History</a></li>
                </ul>

            </div>
        </div>
    );
}