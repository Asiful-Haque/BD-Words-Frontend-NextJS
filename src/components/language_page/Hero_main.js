
import '../../styles/Hero_main.css';
import Image from 'next/image';

export default function Hero_main() {
    return (
        <div className="hero_main">
            <div className='text'>
                <h2>Translate English to Urdu with Our Best Online Dictionary</h2>
                <h3>Discover an easy way to translate English to Urdu with the best online dictionary.
                     It helps you understand words easily. This online tool is like a friendly language buddy,
                      always there to help you. It's simple to use, just like chatting with a friend.
                     Forget about extensive, heavy dictionaries– this one is light and ready whenever needed.
                     You can also flip it around and translate Urdu to English. It's like magic for words! 
                     So, if you want to talk in different languages, this is your go-to friend.
                     Try it, and you'll see how easy and fun it is to learn new words daily!</h3>
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
