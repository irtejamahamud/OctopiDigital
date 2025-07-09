import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=5"
    )
      .then((res) => res.json())
      .then((data) => setBooks(data.items || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="hero-banner relative h-[500px] bg-cover bg-center">
      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Explore Bestsellers
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Dive into our curated collection of top picks.
        </p>

        <div className="book-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {books.map((item) => {
            const info = item.volumeInfo;
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 bg-white"
              >
                <img
                  src={info.imageLinks?.thumbnail}
                  alt={info.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-1 group-hover:text-indigo-600">
                    {info.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {info.authors?.join(", ")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
