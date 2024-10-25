import Header_search from "@/components/language_page/Header_search";
import PaginatedWordList from "@/components/wordList_page/PaginatedWordList";
import Random_word from "@/components/language_page/Random_word";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Language ({ params, searchParams }) {
    const { language } = params; // Get the dynamic language parameter from the URL
    const currentPage = searchParams.page || 1; // Get the page from query parameters, default to 1 if not specified
    const currentLetter = searchParams.letter || 'all';

    return (
        <div>
            <Header_search language={language}></Header_search>
            <PaginatedWordList language={language} currentPage={currentPage} currentLetter={currentLetter}></PaginatedWordList>
            <Random_word language={language}></Random_word>
            <Footer></Footer>
        </div>
    );
}
