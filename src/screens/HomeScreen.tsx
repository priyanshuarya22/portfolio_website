import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Code, Cpu } from 'lucide-react';
import AsciiPre from '../components/AsciiPre';
import { dedent } from '../lib/utils';
import type { Screen } from '../lib/utils';

const HomeScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full"
        >
            {/* System Metadata */}
            <div className="mb-12 border-l-2 border-primary-green pl-4 py-2 bg-[#1b1b1b]/50">
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] uppercase tracking-tighter opacity-80">
                    <p><span className="text-white">[KERNEL]</span> V6.2.0-PORTFOLIO-STABLE</p>
                    <p><span className="text-white">[BOOT]</span> SEQUENCE: SUCCESS</p>
                    <p><span className="text-white">[USER]</span> PRIYANSHU_ARYA@AMZN_SDE_1</p>
                    <p><span className="text-white">[LOC]</span> BENGALURU, KA, IN</p>
                    <p><span className="text-white">[IP]</span> 127.0.0.1</p>
                </div>
            </div>

            {/* ASCII Hero */}
            <section className="mb-20 overflow-x-auto">
                <AsciiPre
                    className="text-primary-green crt-glow font-mono font-bold leading-none text-[0.6rem] md:text-[1rem] lg:text-[1.2rem] whitespace-pre"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace', lineHeight: 1 }}
                >
                    {dedent(`
        ██████╗ ██████╗ ██╗██╗   ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗   ██╗
        ██╔══██╗██╔══██╗██║╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝██║  ██║██║   ██║
        ██████╔╝██████╔╝██║ ╚████╔╝ ███████║██╔██╗ ██║███████╗███████║██║   ██║
        ██╔═══╝ ██╔══██╗██║  ╚██╔╝  ██╔══██║██║╚██╗██║╚════██║██╔══██║██║   ██║
        ██║     ██║  ██║██║   ██║   ██║  ██║██║ ╚████║███████║██║  ██║╚██████╔╝
        ╚═╝     ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝
        `)}
                </AsciiPre>
                <div className="mt-4 flex items-center gap-4">
                    <div className="h-px grow bg-primary-green/30"></div>
                    <p className="text-xs tracking-[0.3em] font-bold uppercase">IDENTIFIED: PRIYANSHU ARYA</p>
                    <div className="h-px w-12 bg-primary-green"></div>
                </div>
            </section>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Bio Card */}
                <div className="md:col-span-8 border border-primary-green p-6 bg-[#0e0e0e] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 bg-primary-green text-bg-dark px-3 py-1 text-[10px] font-bold uppercase">Profile_Manifest</div>
                    <h2 className="text-2xl font-black mb-4 crt-glow flex items-center gap-2">
                        <span className="text-white">&gt;</span> SDE 1 @ AMAZON
                    </h2>
                    <p className="text-sm leading-relaxed mb-6 opacity-90 max-w-2xl">
                        Software Development Engineer specializing in scalable backend systems, cloud infrastructure, and machine learning. Architecting high-availability solutions within the Amazon ecosystem. Focused on efficiency, performance, and the "Ghost in the Machine" paradigm.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="border border-primary-green/40 p-3 bg-[#1b1b1b] flex flex-col gap-1">
                            <span className="text-[10px] opacity-60">SYSTEM_EXPERTISE</span>
                            <span className="text-xs font-bold">BACKEND_SCALING</span>
                        </div>
                        <div className="border border-primary-green/40 p-3 bg-[#1b1b1b] flex flex-col gap-1">
                            <span className="text-[10px] opacity-60">CORE_INFRA</span>
                            <span className="text-xs font-bold">AWS_CLOUD_NATIVE</span>
                        </div>
                        <div className="border border-primary-green/40 p-3 bg-[#1b1b1b] flex flex-col gap-1">
                            <span className="text-[10px] opacity-60">INTELLIGENCE</span>
                            <span className="text-xs font-bold">ML_MODELS_V3</span>
                        </div>
                    </div>
                </div>

                {/* Visual Static */}
                <div className="md:col-span-4 border border-primary-green/30 bg-[#2a2a2a] flex flex-col justify-center items-center p-4 relative grayscale contrast-125 overflow-hidden">
                    <img
                        src="/hacker.jpg"
                        alt="Hacker aesthetic"
                        className="w-full h-full object-cover opacity-60 mix-blend-screen"
                        referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                        <Cpu size={48} className="mb-4 crt-glow text-primary-green pointer-events-none" />
                        <span className="text-[10px] font-bold tracking-widest opacity-80 uppercase text-primary-green pointer-events-none">SYNAPTIC_LINK_ACTIVE</span>
                    </div>
                </div>

                {/* Terminal Status */}
                <div className="md:col-span-12 border border-primary-green p-4 bg-[#0e0e0e] font-mono">
                    <div className="flex items-center gap-2 text-xs mb-4 border-b border-primary-green/20 pb-2">
                        <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                        <span className="ml-2 opacity-50">root@priyanshu-arya-os:~</span>
                    </div>
                    <div className="space-y-1 text-xs">
                        <p><span className="text-white">priyanshu@kernel:~$</span> fetch-system-status</p>
                        <p className="text-primary-green/70">Connecting to AWS Region: ap-south-1...</p>
                        <p className="text-primary-green/70">Initializing ML Pipelines [####################] 100%</p>
                        <p className="text-primary-green/70">Latency check: 14ms</p>
                        <div className="flex items-center">
                            <span className="text-white">priyanshu@kernel:~$</span>
                            <span className="ml-2">exec initiate_contact</span>
                            <span className="cursor-blink ml-1 w-2 h-4 bg-primary-green"></span>
                        </div>
                    </div>
                </div>

                {/* Location Card */}
                <div className="md:col-span-4 border border-primary-green/30 p-4 bg-[#1b1b1b]/50">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold opacity-60 uppercase">Node_Location</span>
                        <MapPin size={14} className="text-primary-green" />
                    </div>
                    <p className="text-lg font-bold crt-glow">BENGALURU</p>
                    <p className="text-xs opacity-80 mb-4">Karnataka, India [12.9716° N, 77.5946° E]</p>
                    <div className="w-full h-24 bg-[#353535] border border-primary-green/20 overflow-hidden">
                        <img
                            src="/bangalore.jpg"
                            alt="Bengaluru map"
                            className="w-full h-full object-cover brightness-60 contrast-120"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="md:col-span-8 flex flex-col md:flex-row gap-4">
                    <a
                        href="mailto:priyanshuarya22@gmail.com"
                        className="flex-1 bg-primary-green text-bg-dark font-black py-4 px-6 flex items-center justify-between group hover:bg-white transition-all pixel-border cursor-pointer"
                    >
                        <span className="uppercase tracking-tighter">INITIATE_HANDSHAKE</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button
                        onClick={() => setScreen('PROJ')}
                        className="flex-1 border border-primary-green text-primary-green font-black py-4 px-6 flex items-center justify-between hover:bg-primary-green/10 transition-all cursor-pointer"
                    >
                        <span className="uppercase tracking-tighter">[ VIEW_REPOS ]</span>
                        <Code size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );

};

export default HomeScreen;
