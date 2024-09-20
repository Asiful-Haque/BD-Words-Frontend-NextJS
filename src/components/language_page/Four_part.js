'use client'

import { useState, useEffect } from 'react';
import '../../styles/Four_part.css';
export default function Four_part() {
    //For the date of current day
    const d = new Date();
    const formattedDate = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    //For fetching the data word of the day from api
    const [wotD,setwotD] = useState('');

    useEffect(() => {
        const fetchedData = async () => {
            try {
                const response = await fetch('http://localhost:5000/urdu/');
                const data = await response.json();

                setwotD(data.wordOfTheDay);
            } catch (error) {
                console.error('Error fetching words:', error);
            }
        };
        fetchedData();
    }, []);


    return (
        <div className='four_part_container'>
            <div className='parts_1'>
                <div className='content'>
                    <h3>WORD OF THE DAY</h3>
                    <h2>{formattedDate}</h2>
                    <a href="/#"><button>{wotD}</button></a>
                </div>
            </div>
            <div className='parts_2'>
                <div className='content'>
                    <h3>FILL IN THE BLANK</h3>
                    <h2>Take The Quiz</h2>
                    <p>In this quiz, you will be presented with sentences that have one or more missing words.
                       Your task is to fill in the blanks with the most appropriate word or phrase.
                       This quiz is designed to help you expand your vocabulary and improve your understanding of word usage.</p>
                </div>
            </div>
            <div className='parts_3'>
                <div className='content'>
                <h3>TOPIC WISE WORDS</h3>
                    <h2>Search For Topic Wise Words</h2>
                    <p>In Topic Wise Word it is designed to help you strengthen your vocabulary in a structured and organized way.
                       This section provides a curated collection of words and their meanings based on specific topics and themes.</p>
                </div>
            </div>
            <div className='parts_4'>
                <div className='content'>
                    <h3>YOUR WORD SEARCH HISTORY</h3>
                </div>
            </div>
        </div>
    );
}