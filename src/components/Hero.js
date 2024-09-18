
import '../styles/Hero.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="hero">
            <div className='text'>
                <h2>Enables easy translation of English language to various languages with a simple online dictionary.
                     It's quick, lightweight. 
                     You can also translate various languages to English.
                     Perfect for learning new words every day.
                </h2>
            </div>
            <div className='image'>
                <Image 
                    src="/banner-image.png"
                    alt="Logo" 
                    width={450} // Set a width
                    height={50} // Set a height
                />
            </div>
        </div>
    );
}
