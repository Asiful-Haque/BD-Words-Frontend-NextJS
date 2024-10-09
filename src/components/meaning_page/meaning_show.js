import '../../styles/meaning_show.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Meaning_show({ language, word, meaning }) {

    // Function to remove all HTML tags
    const stripHtmlTags = (htmlString) => {
        return htmlString.replace(/<[^>]+>/g, ''); 
    };

    return (
        <div className="meaning_container">
            <div className="text_value">
                <h2 className="sound">English to {language} meaning of <strong>{word}</strong></h2>
                {meaning ? (
                    <div className="value">
                        <h1 className="meaning">{stripHtmlTags(meaning.meaning)}</h1>
                    </div>
                ) : (
                    <p>No meaning data available.</p>
                )}
            </div>

            <div className="share-container">
                <h3>SHARE THIS</h3>
                <div className="icons">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-plus"></i></a>
                </div>
            </div>

            <div className="sentence-container">
                <h3>SENTENCE EXAMPLES</h3>
                <div className="cont">
                    <ol>
                        {meaning.sentExample.map((individual, index) => (
                            <li  key={index}>{(index+1) +`. `}{individual}</li>
                        ))}
                    </ol>
                </div>
            </div>

        </div>
    );
}
