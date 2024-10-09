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


                <div className='right_side'>
                    <div className="searching">
                        <select name="languages" className='languages-dropdown' onChange={handleSelectChange}>
                                <option value="">Choose a language</option>
                                <option value="afrikaans">Afrikaans</option>
                                <option value="amharic">Amharic</option>
                                <option value="burmese">Burmese</option>
                                <option value="filipino">Filipino</option>
                                <option value="gujarati">Gujarati</option>
                                <option value="hebrew">Hebrew</option>
                                <option value="hindi">Hindi</option>
                                <option value="hausa">Hausa</option>
                                <option value="kannada">Kannada</option>
                                <option value="malayalam">Malayalam</option>
                                <option value="maari">Maari</option>
                                <option value="marathi">Marathi</option>
                                <option value="nepali">Nepali</option>
                                <option value="persian">Persian</option>
                                <option value="punjabi">Punjabi</option>
                                <option value="sinhalese">Sinhalese</option>
                                <option value="somali">Somali</option>
                                <option value="swahili">Swahili</option>
                                <option value="tamil">Tamil</option>
                                <option value="telugu">Telugu</option>
                                <option value="urdu">Urdu</option>
                                <option value="yoruba">Yoruba</option>
                                <option value="zulu">Zulu</option>
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
                </div>

                
            </header>
        </div>
    );
}
