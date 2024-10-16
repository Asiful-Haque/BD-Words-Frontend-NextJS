import Fill_blanks from '@/components/Fill_blanks'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

const page = async () => {
  let data = [];
  try {
    const response = await fetch(`http://localhost:5000/mcq/fillInTheBlanks`, {
      method: 'GET',
      cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error('Error fetching Word');
    }
    data = await response.json(); 
  }catch(error)  {
    console.error('Error:', error);
  }

  return (
    <div>
      <Header></Header>
      <Fill_blanks data={data}></Fill_blanks>
      <Footer></Footer>
    </div>
  );
};

export default page
