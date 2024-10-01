import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Header_search from "@/components/language_page/Header_search";
import Random_word from "@/components/language_page/Random_word";
import Meaning_show from "@/components/meaning_page/meaning_show";

import '@/styles/meaning_custom_header_search.css';
import '@/styles/meaning_custom_random_word.css';


export default async function Meaning({ params }) {

  const { language, meaning } = params;
  
    const parts = meaning.split('-'); 
    const word = parts[parts.length - 1];       

  if (!meaning) {
      return <div>Error: Word parameter is missing!</div>;
  }

  const res = await fetch(`http://localhost:5000/${language}/english-to-${language}-meaning-${word}`, {
      method: 'GET',
      cache: 'no-store',
  });
  if (!res.ok) {
      throw new Error('Failed to fetch meaning data');
  }
  const meaningData = await res.json();

  return (
      <div>
          <Header_search language={language} word={word}></Header_search>
          <Random_word></Random_word>
          <Meaning_show language={language} word={word} meaning={meaningData}></Meaning_show>
          <Footer></Footer>
      </div>
  );
}
