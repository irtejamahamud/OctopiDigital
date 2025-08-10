import React from "react";

// Helper to convert YouTube URL to embed URL
function getYoutubeEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(
    /(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/|shorts\/)?)([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function SongCard({ song, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-2 border hover:shadow-xl transition">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-indigo-600">{song.songlist}</h3>
        <span className="text-xs text-gray-400">{song.date}</span>
      </div>
      {song.youtube && (
        <div className="aspect-video w-full rounded overflow-hidden mb-2">
          <iframe
            src={getYoutubeEmbedUrl(song.youtube)}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
      <p className="text-gray-700 text-sm">{song.description}</p>
      <button
        onClick={() => onEdit(song)}
        className="mt-2 self-end bg-pink-500 hover:bg-indigo-500 text-white px-3 py-1 rounded text-xs font-semibold transition"
      >
        Update
      </button>
    </div>
  );
}
