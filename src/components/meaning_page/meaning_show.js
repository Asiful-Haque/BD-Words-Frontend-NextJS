import '../../styles/meaning_show.css';

export default function Meaning_show({ language, word, meaning }) {
    return (
        <div className="meaning_container">
            <div className="text_value">
                <h2>English to {language} meaning of <strong>{word}</strong>:</h2>
                {meaning ? (
                    <>
                        <h1>{meaning.meaning}</h1>
                        <p>{meaning.definition || 'Definition not found.'}</p>
                    </>
                ) : (
                    <p>No meaning data available.</p>
                )}
            </div>
        </div>
    );
}
