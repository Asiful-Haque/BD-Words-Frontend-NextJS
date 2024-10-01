import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Four_part from "@/components/language_page/Four_part";
import Header_search from "@/components/language_page/Header_search";
import Hero_main from "@/components/language_page/Hero_main";
import Random_word from "@/components/language_page/Random_word";


export default function language({ params }) {
    const { language } = params;
    console.log("ehllo");

  return (
    <div>
      <Header_search language={language}></Header_search>
      <Hero_main></Hero_main>
      <Random_word></Random_word>
      <Four_part></Four_part>
      <Footer></Footer>
    </div>
  );
}
