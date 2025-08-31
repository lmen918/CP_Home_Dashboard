"use client"
import {useEffect, useState} from "react";

export const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every 1 second

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timerId);
    }, []); // Empty dependency array ensures effect runs only once on mount

    const formatTime = (date: Date): string => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="bg-black bg-opacity-80 border-b border-neon-blue shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-neon-blue rounded-full flex items-center justify-center">
                        <i className="fas fa-terminal text-xl text-black"></i>
                    </div>
                    <h1 className="text-2xl font-bold neon-text glitch" data-text="CYBER_HUB">CYBER_HOME_HUB</h1>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="text-sm digital">
                        <span className="neon-blue">SYSTEM TIME:</span>
                        <span id="time" className="neon-pink">{formatTime(currentTime)}</span>
                    </div>
                    <div className="text-sm digital">
                        <span className="neon-blue">NODE:</span>
                        <span className="neon-purple">PRIMARY</span>
                    </div>
                    <div className="relative group">
                            <button className="px-4 py-2 bg-black bg-opacity-70 border border-neon-blue rounded-md hover:bg-opacity-100 transition ml-2 neon-text">ADMIN</button>
                            <select className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 border border-neon-blue rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-50">
                                <option className="block px-4 py-2 text-sm hover:bg-neon-blue hover:bg-opacity-20">Profile</option>
                                <option className="block px-4 py-2 text-sm hover:bg-neon-blue hover:bg-opacity-20">Settings</option>
                                <option className="block px-4 py-2 text-sm hover:bg-neon-blue hover:bg-opacity-20">Logout</option>
                            </select>
                    </div>
                </div>
            </div>
        </div>
    )
}