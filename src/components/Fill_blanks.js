// Add this line at the top to specify this as a Client Component
"use client";

import React, { useState, useEffect } from 'react';
import '@/styles/Fill_blanks.css'; 

export default function Fill_blanks({ data }) {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(data.length).fill(null)); 
  const [correctCount, setCorrectCount] = useState(0); 
  const [showOverlay, setShowOverlay] = useState(false);

  // 2. This function is triggered when a user selects an answer
  const handleAnswerChange = (questionIndex, selectedOption) => {
    // Update the array directly at the questionIndex
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption; // Set the selected answer at the current question's index
    setSelectedAnswers(updatedAnswers);
  };

  // 3. This function checks the answers when the user submits the quiz
  const handleSubmit = () => {
    let count = 0;
    data.forEach((item, index) => {
      if (selectedAnswers[index] === item.answer) {
        count++; 
      }
    });
    setCorrectCount(count); 
    setShowOverlay(true);
  };

  // Function to handle the OK button click
  const handleOkClick = () => {
    setShowOverlay(false); // Hide the overlay
    window.location.reload(); // Reload the page
  };


  return (
    <div className="mcq-container">
      <h2>Fill in the Blanks</h2>
        <div className="mcq">
          <div className='parent-div-for-each-mcq'>
            {data.length > 0 ? (
              data.map((item, index) => (
                <div className="each-mcq" key={index}>
                  <p>{index+1}. {item.question}</p>

                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={item.option1}
                      onChange={() => handleAnswerChange(index, item.option1)}
                      checked={selectedAnswers[index] === item.option1}
                    />
                    {item.option1}
                  </label>

                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={item.option2}
                      onChange={() => handleAnswerChange(index, item.option2)}
                      checked={selectedAnswers[index] === item.option2}
                    />
                    {item.option2}
                  </label>

                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={item.option3}
                      onChange={() => handleAnswerChange(index, item.option3)}
                      checked={selectedAnswers[index] === item.option3}
                    />
                    {item.option3}
                  </label>

                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={item.option4}
                      onChange={() => handleAnswerChange(index, item.option4)}
                      checked={selectedAnswers[index] === item.option4}
                    />
                    {item.option4}
                  </label>
                </div>
              ))
              ) : (
                <p>No data available</p>
            )}
          </div>
          <button className='chk-btn' onClick={handleSubmit}>Submit</button>
        </div>
          {showOverlay && (
          <div className="overlay">
            <div className="overlay-content">
              <h2>Congratulations!</h2>
              <h2>You got {correctCount} out of {data.length} correct!</h2>
              <button onClick={handleOkClick}>OK</button>
            </div>
          </div>
          )}
    </div>
    
  );
};

