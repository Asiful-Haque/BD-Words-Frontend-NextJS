"use client"

import { useEffect, useState } from 'react';
import '../../styles/Random_word.css';
import Image from 'next/image';

export default function Random_word({ white }) {
    console.log(white);
    const [words, setWords] = useState([]);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const res = await fetch('http://localhost:5000/urdu/'); // API endpoint
                const data = await res.json();

                console.log('Fetched randomWords:', data.randomWords);
                setWords(data.randomWords); // Set the randomWords array directly
            } catch (error) {
                console.error('Error fetching words:', error);
            }
        };

        fetchWords(); // Trigger data fetching
    }, []); 

    return (
        <div className={`random_word_container ${white == "yes" ? 'modified' : ''}`}>
            <div className='image'>
                <Image 
                    src="/randomimage.avif"
                    alt="Logo" 
                    width={500} // Set a width
                    height={50} // Set a height
                />
            </div>
            <div className='text_container'>
                <h3>Random Words</h3>
                <div className='five_words'>
                    {words.map((word, index) => (
                        <a href="/#"><button className='ind_button'>{word}</button></a>
                    ))}
                </div>
            </div>
        </div>
    );
}
