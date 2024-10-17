'use client'; // Ensure the component is client-side

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importing useRouter for dynamic routing
import '../../styles/Header_search.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header_search({ language, word = '', white }) {
    const [isMenu_2Open, setIsMenu_2Open] = useState(false);
    const [searchWord, setSearchWord] = useState(''); 
    const [suggestions, setSuggestions] = useState([]); // State for suggestions
    const router = useRouter(); 

    const toggleMenu_2 = () => {
        setIsMenu_2Open(!isMenu_2Open);
    };

    // Fetch suggestions from the API
    const fetchSuggestions = async (value) => {
        if (value.length >= 3) {
            try {
                const response = await fetch(`http://localhost:5000/urdu/search/${value}`);
                const data = await response.json();
                setSuggestions(data.SearchPopUpData); 
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        } else {
            setSuggestions([]); 
        }
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchWord(value); // Update input value
        fetchSuggestions(value); // Fetch related words based on the current input
    };
    const handleSuggestionClick = (suggestion) => {
        setSearchWord(suggestion); // Set the clicked suggestion as the input value
        setSuggestions([]); // Clear suggestions after selecting
    };
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchWord) {
            const targetUrl = `/${language}/english-to-${language}-meaning-${searchWord}`;
            setSearchWord(""); 
            setSuggestions([]); // Clear suggestions after search
            router.replace(targetUrl); 
        }
    };
    

    return (
        <div className={`Search_bar_container ${white === "yes" ? 'modified' : ''}`}>
            <div className={`search-bar ${white === "yes" ? 'modified' : ''}`}>
                <Link href={`/${language}`}>
                    <Image 
                        className="logo-img"
                        src={`/${language}.png`} 
                        alt={`Large ${language} Dictionary Logo`}  
                        width={200} 
                        height={70} 
                    />
                </Link>
                
                {/* <Image 
                    className="short_logo_urdu" 
                    src="https://english-nepali.com/urdu/logo/urdu-sm.png" 
                    alt="Small Urdu Dictionary Logo" 
                    fill
                    style={{ objectFit: 'contain' }}
                /> */}
                <Link href={`/${language}`}>
                    <Image 
                        className="short_logo_urdu"
                        src={`/${language}_short.png`} 
                        alt={`Small ${language} Dictionary Logo`}  
                        width={50} 
                        height={0} 
                    />
                </Link>

                <div className="relative-absolute">
                    <form onSubmit={handleSearch} className={`search_field ${white === "yes" ? 'modified' : ''}`}>
                        <input 
                            type="text" 
                            placeholder="Search for words" 
                            value={searchWord} // Controlled input
                            onChange={handleSearchChange} // Update input value
                        />
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                    {suggestions.length > 0 && (
                        <ul className="suggestions-dropdown">
                            {suggestions.map((suggestion, index) => (
                                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
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
