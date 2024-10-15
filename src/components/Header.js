"use client";

import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../styles/Header.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleSearchChange = (e) => {
        setSearchWord(e.target.value);
    };
    const handleSelectChange = (e) => {
        setSelectedLanguage(e.target.value);
    };
    const handleSearchSubmit = (e) => {
        if(e.key === 'Enter'){
                const targetUrl = `/${selectedLanguage}/english-to-${selectedLanguage}-meaning-${searchWord}`;
                setSearchWord(''); 
                router.push(targetUrl);
                // window.location.href = targetUrl; 
        }
    }

    return (
        <div className='all_container'>
            <header className='header'>
                <div className="logo-container">
                    <Image 
                        className="logo-img"
                        src="/logo english welsh.png"
                        alt="Large Urdu Dictionary Logo" 
                        width={200} 
                        height={70} 
                    />
                    <img 
                        className="short-logo" 
                        src="https://english-nepali.com/urdu/logo/urdu-sm.png" 
                        alt="Small Urdu Dictionary Logo" 
                    />
                </div>


                {/* <div className='right_side'> */}
                    <div className="searching">
                        <select name="languages" className='languages-dropdown' onChange={handleSelectChange}>
                                <option value="">Language</option>
                                <option value="afrikaans">Afr</option>
                                <option value="amharic">Amh</option>
                                <option value="burmese">Bur</option>
                                <option value="filipino">Fil</option>
                                <option value="gujarati">Guj</option>
                                <option value="hebrew">Heb</option>
                                <option value="hindi">Hin</option>
                                <option value="hausa">Hau</option>
                                <option value="kannada">Kan</option>
                                <option value="malayalam">Ma</option>
                                <option value="maori">Maa</option>
                                <option value="marathi">Mar</option>
                                <option value="nepali">Nep</option>
                                <option value="persian">Per</option>
                                <option value="punjabi">Pun</option>
                                <option value="sinhala">Sin</option>
                                <option value="somali">Som</option>
                                <option value="swahili">Swa</option>
                                <option value="tamil">Tam</option>
                                <option value="telugu">Tel</option>
                                <option value="urdu">Ur</option>
                                <option value="yoruba">Yor</option>
                                <option value="zulu">Zu</option>
                        </select>
                        <input 
                            type="text"
                            placeholder="Search for words"
                            value={searchWord}
                            onChange={handleSearchChange}
                            onKeyDown={handleSearchSubmit} 
                        />
                    </div>
                    
                    
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
                {/* </div> */}

                
            </header>
        </div>
    );
}
