import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Header_search from "@/components/language_page/Header_search";
import Random_word from "@/components/language_page/Random_word";
import Meaning_show from "@/components/meaning_page/meaning_show";

import '@/styles/meaning_custom_header_search.css';
import '@/styles/meaning_custom_random_word.css';


export default async function Meaning({ params }) {
  const { language, word } = params;

  return (
      <div>
          <Header_search language={language}></Header_search>
          <Random_word></Random_word>
          <Meaning_show></Meaning_show>
          <Footer></Footer>
      </div>
  );
}
