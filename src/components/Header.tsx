import React, { useState } from 'react';
import { Menu, Terminal, Settings, Power } from 'lucide-react';
import type { Screen } from '../lib/utils';

const Header = ({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = (s: Screen) => {
        setScreen(s);
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-6 py-2 bg-bg-dark border-b border-primary-green shadow-[0_0_8px_rgba(0,246,62,0.3)]">
            <div className="flex items-center gap-3 text-lg font-bold text-primary-green animate-pulse font-mono uppercase tracking-widest crt-glow">
                <svg width="28" height="20" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
                    <rect x="1.5" y="1.5" width="61" height="45" rx="6" stroke="#00F63E" strokeWidth="3" fill="#131313" />
                    <text x="10" y="34" fontFamily="monospace" fontSize="28" fill="#00F63E">&gt;_</text>
                </svg>
                PRIYANSHU ARYA
            </div>

            {/* desktop nav */}
            <nav className="hidden md:flex items-center gap-6 font-mono uppercase tracking-widest text-xs">
                {(['HOME', 'EXP', 'SKILLS', 'PROJ'] as Screen[]).map((s) => (
                    <button
                        key={s}
                        onClick={() => setScreen(s)}
                        className={`px-2 py-0.5 transition-colors duration-75 cursor-pointer ${currentScreen === s
                            ? 'text-bg-dark bg-primary-green'
                            : 'text-primary-green opacity-70 hover:opacity-100 hover:bg-primary-green hover:text-bg-dark'
                            }`}>
                        {s}
                    </button>
                ))}
            </nav>

            <div className="flex items-center gap-3">
                {/* mobile menu button */}
                <button aria-label="menu" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-primary-green p-1">
                    <Menu size={18} />
                </button>

                <div className="hidden md:flex items-center gap-4 text-primary-green">
                    <Terminal size={16} className="cursor-pointer hover:bg-primary-green hover:text-bg-dark p-0.5" />
                    <Settings size={16} className="cursor-pointer hover:bg-primary-green hover:text-bg-dark p-0.5" />
                    <Power size={16} className="cursor-pointer hover:bg-primary-green hover:text-bg-dark p-0.5" />
                </div>
            </div>

            {/* mobile dropdown */}
            {menuOpen && (
                <div className="absolute left-4 right-4 top-14 bg-[#0f0f0f] border border-primary-green p-3 rounded-md shadow-lg md:hidden z-50">
                    <div className="flex flex-col gap-2">
                        {(['HOME', 'EXP', 'SKILLS', 'PROJ'] as Screen[]).map(s => (
                            <button key={s} onClick={() => handleNav(s)} className={`text-left px-3 py-2 uppercase font-mono ${currentScreen === s ? 'bg-primary-green text-bg-dark' : 'text-primary-green hover:bg-primary-green/10'}`}>
                                {s}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
