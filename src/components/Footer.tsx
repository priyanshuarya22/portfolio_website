import React from 'react';

export const Footer = () => (
    <footer className="fixed bottom-0 w-full z-50 flex flex-row items-center justify-between px-6 py-1 bg-bg-dark bg-opacity-95 backdrop-blur-sm border-t border-primary-green">
        <div className="font-mono text-[10px] uppercase text-primary-green">
            (C) 2001-2026 PRIYANSHU_ARYA.SYS
        </div>
        <div className="flex gap-6 font-mono text-[10px] uppercase">
            <a href="https://github.com/priyanshuarya22" target="_blank" rel="noopener noreferrer" className="text-primary-green opacity-60 hover:text-white hover:bg-primary-green/20 px-2 transition-all">GITHUB</a>
            <a href="https://www.linkedin.com/in/priyanshuarya22/" target="_blank" rel="noopener noreferrer" className="text-primary-green opacity-60 hover:text-white hover:bg-primary-green/20 px-2 transition-all">LINKEDIN</a>
            <a href="#" className="text-primary-green opacity-60 hover:text-white hover:bg-primary-green/20 px-2 transition-all">REJECT_ALL</a>
        </div>
        <div className="hidden md:block text-primary-green font-mono text-[10px] uppercase opacity-50">
            SECURE_CONNECTION: AES-256
        </div>
    </footer>
);

export default Footer;
