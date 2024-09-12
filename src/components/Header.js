"use client";

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../styles/Header.css';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='all_container'>
            <header className='header'>
                <Image 
                    src="/logo english welsh.png"
                    alt="Logo" 
                    width={200} // Set a width
                    height={70} // Set a height
                />
                <div className='navbar'>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#privacy">Privacy</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className='icon' onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>
        </div>
    );
}
