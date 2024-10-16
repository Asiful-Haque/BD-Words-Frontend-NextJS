
import '../styles/all_buttons.css';
import Link from 'next/link';
export default function All_buttons() {
    
    return (
        <main>
            <div className="option_container">
                <h1>Available Languages</h1>
                <div className="store">
                    <Link href="/afrikaans">
                        <button>Afrikaans</button>
                    </Link>
                    <Link href="/amharic">
                        <button>Amharic</button>
                    </Link>
                    <Link href="/burmese">
                        <button>Burmese</button>
                    </Link>
                    <Link href="/filipino">
                        <button>Filipino</button>
                    </Link>
                    <Link href="/gujarati">
                        <button>Gujarati</button>
                    </Link>
                    <Link href="/hebrew">
                        <button>Hebrew</button>
                    </Link>
                    <Link href="/hindi">
                        <button>Hindi</button>
                    </Link>
                    <Link href="/hausa">
                        <button>Hausa</button>
                    </Link>
                    <Link href="/kannada">
                        <button>Kannada</button>
                    </Link>
                    <Link href="/malayalam">
                        <button>Malayalam</button>
                    </Link>
                    <Link href="/maori">
                        <button>Maori</button>
                    </Link>
                    <Link href="/marathi">
                        <button>Marathi</button>
                    </Link>
                    <Link href="/nepali">
                        <button>Nepali</button>
                    </Link>
                    <Link href="/persian">
                        <button>Persian</button>
                    </Link>
                    <Link href="/punjabi">
                        <button>Punjabi</button>
                    </Link>
                    <Link href="/sinhala">
                        <button>Sinhalese</button>
                    </Link>
                    <Link href="/somali">
                        <button>Somali</button>
                    </Link>
                    <Link href="/swahili">
                        <button>Swahili</button>
                    </Link>
                    <Link href="/tamil">
                        <button>Tamil</button>
                    </Link>
                    <Link href="/telugu">
                        <button>Telugu</button>
                    </Link>
                    <Link href="/urdu">
                        <button>Urdu</button>
                    </Link>
                    <Link href="/yoruba">
                        <button>Yoruba</button>
                    </Link>
                    <Link href="/zulu">
                        <button>Zulu</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
