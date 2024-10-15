import NotFound from '@/app/not-found';

export default function fillBlanksCatchAll({ params }) {
  const { slug } = params; // Capture URL segments

  // Check if the path is exactly 'shuffle_game'
  const isValidPath = slug.length === 1 && slug[0] === 'shuffle_game';

  if (!isValidPath) {
    return <NotFound />; // Render 404 page if the path is invalid
  }

  // If the path is valid, render the shuffle game page
  return <shuffle_game />; // Call the ShuffleGame component directly
}