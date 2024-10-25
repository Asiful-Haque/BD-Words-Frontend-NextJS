import Footer from "@/components/Footer";

import Header_search from "@/components/language_page/Header_search";
import Random_word from "@/components/language_page/Random_word";
import Meaning_show from "@/components/meaning_page/meaning_show";


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
          <Header_search language={language} word={word} white="yes"></Header_search>
          <Meaning_show language={language} word={word} meaning={meaningData}></Meaning_show>
          <Random_word language={language} white ="yes"></Random_word>
          <Footer></Footer>
      </div>
  );
}
