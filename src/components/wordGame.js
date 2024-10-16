// Add this line at the top to specify this as a Client Component
"use client";

import React, { useState, useEffect } from 'react';
import '@/styles/wordGame.css'; 
import Link from 'next/link';

export default function WordGame({ originalWord }) {
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [message, setMessage] = useState('');
  const [droppedLetters, setDroppedLetters] = useState([]);

  useEffect(() => {
    // Shuffle the letters when the component mounts
    const shuffleWord = (word) => {
      const letters = word.split('');
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      return letters;
    };

    setShuffledLetters(shuffleWord(originalWord));
  }, [originalWord]);

  const handleDragStart = (e, letter) => {
    e.dataTransfer.setData("text/plain", letter);
  };

  const handleDrop = (e) => {
    const letter = e.dataTransfer.getData("text/plain");
    if (letter) {
      setUserInput((prev) => [...prev, letter]);
      setDroppedLetters((prev) => [...prev, letter]);
    }
  };

  const handleCheckMatch = () => {
    const userWord = userInput.join('');
    if (userWord === originalWord) {
      setMessage("Congratulations! You've matched the word!");
    } else {
      setMessage("Try again!");
    }
  };

  const handleReset = () => {
    setUserInput([]);
    setMessage('');
    setShuffledLetters(shuffledLetters.sort(() => Math.random() - 0.5)); // Reshuffle
    setDroppedLetters([]);
  };
  
  return (
    <div className="game-container">
        <div className="word-game">
          <h2>Word Match Game</h2>
          <div className="shuffled-letters">
            {shuffledLetters.map((letter, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, letter)}
                className={`letter ${droppedLetters.includes(letter) ? 'dropped' : ''}`}
              >
                {letter}
              </div>
            ))}
          </div>

          <div
            className="drop-area"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className='bind'>
              <h3>Drop Letters Here</h3>
              <div className="user-input">
                {userInput.map((letter, index) => (
                  <span key={index} className="dropped-letter">{letter}</span>
                ))}
              </div>
            </div>
            
          </div>

          <div className='button-container'>
            <button className='chk-btn' onClick={handleCheckMatch}>Check Match</button>
            <button className='chk-btn' onClick={handleReset}>Reset</button>
            <button className='chk-btn' onClick={() => window.location.reload()}>
              Try Another
            </button>
            {message && <h4>{message}</h4>}
          </div>

          
        </div>
    </div>
    
  );
};

