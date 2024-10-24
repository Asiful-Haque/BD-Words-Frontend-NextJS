import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import '../../styles/PaginatedWordList.css';

const PaginatedWordList = async ({ language, currentPage }) => {
    // Fetch data from your API based on the current page and language
    const response = await fetch(`http://localhost:5000/${language}/english-to-${language}-wordList?page=${currentPage}`);

    // Handle response errors
    if (!response.ok) {
        console.error("Failed to fetch:", response.status);
        return <div>Error fetching data.</div>; // Handle error case
    }

    const responseData = await response.json();
    const { words, totalPages, hasNextPage, hasPreviousPage, nextPage, previousPage } = responseData;

    return (
        <div className='word-list-container'>
            <h1>{`English to ${language.charAt(0).toUpperCase() + language.slice(1)} Word List (Page ${currentPage})`}</h1>
            <div className='all-word-container'>
                {/* <ul>
                    {words.map((word, index) => (
                        <li key={index}>
                            <Link href={`/${language}/english-to-${language}-meaning-${word.replace(/\s+/g, '-').toLowerCase()}`}>
                                {word}
                            </Link>
                        </li>
                    ))}
                </ul> */}

                {words.map((word, index) => (
                        <div className='each-word' key={index}>
                            <Link href={`/${language}/english-to-${language}-meaning-${word.replace(/\s+/g, '-').toLowerCase()}`}>
                                {word}
                            </Link>
                        </div>
                ))}
            </div>
            
            <div className="pagination-controls">
                {currentPage > 1 && (
                    <Link href={`/${language}/wordList?page=1`}>
                        <button>First</button>
                    </Link>
                )}
                {hasPreviousPage && (
                    <Link href={`/${language}/wordList?page=${previousPage}`}>
                        <button>Previous</button>
                    </Link>
                )}
                <span>{` Page ${currentPage} of ${totalPages} `}</span>
                {hasNextPage && (
                    <Link href={`/${language}/wordList?page=${nextPage}`}>
                        <button>Next</button>
                    </Link>
                )}
                {currentPage < totalPages && (
                    <Link href={`/${language}/wordList?page=${totalPages}`}>
                        <button>Last</button>
                    </Link>
                )}
            </div>

            <div className="glowing-border">
                Your Content Here
            </div>
        </div>
    );
};

export default PaginatedWordList;
