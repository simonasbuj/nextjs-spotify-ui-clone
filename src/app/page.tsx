"use client"

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showCurrentlyPlayingInfo, setShowCurrentlyPlayingInfo] = useState(true);

  const toggleThirdDiv = () => {
    setShowCurrentlyPlayingInfo(!showCurrentlyPlayingInfo);
  };

  return (
    <>
      <div className="flex bg-slate-800 w-full h-full">
        <div className="w-1/4 bg-gray-200 rounded-lg m-1">Your library</div>
        <div className="flex-grow bg-gray-400 rounded-lg m-1 text-right">Main screen</div>
        <div
          className={`w-1/4 bg-gray-600 rounded-lg m-1 ${!showCurrentlyPlayingInfo ? "hidden" : ""}`}
        >
          Currently playing view (can be hidden)
        </div>
      </div>

      <button
        onClick={toggleThirdDiv}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle View
      </button>
    </>
  );
}
