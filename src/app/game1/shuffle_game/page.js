import WordGame from "@/components/wordGame";

export default async function shuffle_game() {
    const response = await fetch(`http://localhost:5000/game1/shuffle_game`, {
      method: 'GET',
      cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error('Error fetching Word');
    }
    const data = await response.json();
    const originalWord = data.Word;
  return (
      <div>
          <WordGame originalWord={originalWord}></WordGame>
      </div>
  );
}