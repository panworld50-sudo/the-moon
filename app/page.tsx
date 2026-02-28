export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-yellow-400 mb-4">Welcome to The Moon 🌕</h1>
      <h1 className="text-5xl font-bold text-black dark:text-yellow-400 mb-4">Welcome to The Moon 🌕</h1>
      <p className="text-xl mb-8">Breaking News, Study Materials, and Business Tips!</p>
      {/* Add carousel or grid for top stories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">News Card 1</div>
        <div className="bg-gray-800 p-4 rounded-lg">News Card 2</div>
        <div className="bg-gray-800 p-4 rounded-lg">News Card 3</div>
      </div>
    </div>
  );
}
