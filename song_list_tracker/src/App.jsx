import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SongModal from "./components/SongModal";
import SongCard from "./components/SongCard";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editSong, setEditSong] = useState(null);

  const handleAdd = () => {
    setEditSong(null);
    setModalOpen(true);
  };

  const handleSave = (song) => {
    if (editSong) {
      setSongs(
        songs.map((s) =>
          s === editSong ? { ...song, date: editSong.date } : s
        )
      );
    } else {
      setSongs([{ ...song, date: new Date().toLocaleDateString() }, ...songs]);
    }
    setModalOpen(false);
    setEditSong(null);
  };

  const handleEdit = (song) => {
    setEditSong(song);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-white">
      <Navbar />
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-700">Your Song List</h1>
          <button
            onClick={handleAdd}
            className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-2 rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            Add Song
          </button>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {songs.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 text-lg py-10">
              No songs added yet.
            </div>
          ) : (
            songs.map((song, idx) => (
              <SongCard key={idx} song={song} onEdit={handleEdit} />
            ))
          )}
        </div>
      </div>
      <SongModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditSong(null);
        }}
        onSave={handleSave}
        initialData={editSong}
      />
    </div>
  );
}
