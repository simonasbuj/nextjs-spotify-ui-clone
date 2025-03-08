import { useState, useEffect } from 'react';
import { FaStepBackward, FaStepForward } from 'react-icons/fa';
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

export default function MusicPlayer () {
  
    const songLength = 32000
    const [currentSongTime, setCurrentSongTime] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)



    const handlePlayButton = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentSongTime(prevTime => Math.min(prevTime + 1, songLength))
            }, 1);
        } else if (!isPlaying && interval) {
            clearInterval(interval)
        }
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        };
    }, [isPlaying, songLength])

    return (
        <div className="text-center flex flex-col py-4 w-1/2">
            <audio src='/sample.mp3' />
            <div className="flex items-center justify-center space-x-4">
                <button className="text-white text-2xl"><FaStepBackward /></button>
                <button className="text-white text-4xl" onClick={handlePlayButton}>
                    {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
                </button>
                <button className="text-white text-2xl"><FaStepForward /></button>
            </div>
            <div>
                <input 
                    type="range" 
                    min="0" 
                    max={songLength}
                    className="myRange w-full accent-white hover:accent-green-500 h-1 rounded-lg cursor-pointer"
                    value={currentSongTime}
                    onChange={(e) => setCurrentSongTime(Number(e.target.value))}
                />
            </div>
        </div>
    )
}