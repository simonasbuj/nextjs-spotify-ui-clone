"use client"

import { useState } from 'react';
import MusicPlayer from '@/components/ui/MusicPlayer';

export default function Footer () {

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="
            fixed bottom-0 left-0 right-0
            flex flex-col items-center justify-between
            w-full py-2 px-5
            bg-slate-900 text-white
            min-h-20
        ">
            <div className="flex items-center justify-between w-full">
                <div>icon, title, band </div>

                <MusicPlayer />
                
                <div>some settings, volumne</div>
            </div>
        </div>
    )
}