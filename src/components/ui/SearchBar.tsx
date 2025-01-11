"use client"

import { FaSearch, FaTimes } from 'react-icons/fa';
import VerticalDivider from './VerticalDivider';
import { useState } from 'react';
import clsx from 'clsx';

export default function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchText);
        setSearchText('');
    }

    return (
        <div className={clsx("flex items-center rounded-full px-4 py-2 group hover:bg-gray-600 transition-colors duration-500",
            isFocused ? "bg-gray-600" : 'bg-gray-700'
        )}>
            <FaSearch className={clsx('transition-colors duration-300',
                isFocused ? 'text-white' : 'text-gray-400 group-hover:text-white'
            )} />
            <VerticalDivider />
            <form onSubmit={handleSearch} className="flex-grow">
                <input 
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    className="bg-gray-700 text-white placeholder-gray-400 group-hover:bg-gray-600 focus:bg-gray-600 duration-500 outline-none w-full"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </form>
            <FaTimes 
                className={clsx("ml-2 transition-colors duration-300 hover:cursor-pointer",
                    searchText ? 'text-gray-400 group-hover:text-white auto' : 'text-transparent'
                )} 
                onClick={() => setSearchText('')}
                style={{ pointerEvents: searchText ? 'auto' : 'none' }}
            />
        </div>
    )
}