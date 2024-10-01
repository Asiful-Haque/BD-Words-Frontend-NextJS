'use client'; // Ensure the component is client-side

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importing useRouter for dynamic routing
import '../../styles/Header_search.css';

export default function Header_search({ language, word = '' }) {
    const [isMenu_2Open, setIsMenu_2Open] = useState(false);
    const [searchWord, setSearchWord] = useState(word); // Setting initial value from props
    const router = useRouter(); // Using useRouter for navigation

    const toggleMenu_2 = () => {
        setIsMenu_2Open(!isMenu_2Open);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchWord) {
            // Redirecting to the dynamic route
            router.push(`/${language}/english-to-${language}-meaning-${searchWord}`);
            // setSearchWord('');
        }
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
                <form onSubmit={handleSearch} className="search_field">
                    <input 
                        type="text" 
                        placeholder="Search for words" 
                        value={searchWord} // Controlled input
                        onChange={(e) => setSearchWord(e.target.value)} // Update input value
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
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
