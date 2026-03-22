import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Database } from 'lucide-react';
import { dedent } from '../lib/utils';

const ProjectsScreen: React.FC = () => {
    const [repos, setRepos] = useState<any[] | null>(null);
    const [loadingRepos, setLoadingRepos] = useState(true);
    const [totalReposCount, setTotalReposCount] = useState<number | null>(null);
    const [contributionsCount, setContributionsCount] = useState<number | null>(null);
    const [lastCommitAgo, setLastCommitAgo] = useState<string | null>(null);

    useEffect(() => {
        setLoadingRepos(true);
        fetch('https://api.github.com/users/priyanshuarya22/repos?per_page=100&sort=updated')
            .then(res => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setRepos(data.map(r => ({
                        id: r.id,
                        title: r.name,
                        desc: r.description || '',
                        tags: r.language ? [String(r.language).toUpperCase()] : [],
                        stars: r.stargazers_count ?? 0,
                        forks: r.forks_count ?? 0,
                        html_url: r.html_url,
                        pushed_at: r.pushed_at || null
                    })));
                } else {
                    setRepos([]);
                }
            })
            .catch(() => setRepos([]))
            .finally(() => setLoadingRepos(false));

        fetch('https://api.github.com/users/priyanshuarya22')
            .then(r => r.json())
            .then(u => {
                if (u && typeof u.public_repos === 'number') setTotalReposCount(u.public_repos);
            })
            .catch(() => null);

        fetch('https://api.github.com/users/priyanshuarya22/events/public')
            .then(r => r.json())
            .then(events => {
                if (Array.isArray(events)) {
                    const contribs = events.reduce((acc: number, ev: any) => {
                        if (ev.type === 'PushEvent' && ev.payload && Array.isArray(ev.payload.commits)) {
                            return acc + ev.payload.commits.length;
                        }
                        return acc;
                    }, 0);
                    setContributionsCount(contribs);

                    const pushTimes = events.filter((e: any) => e.type === 'PushEvent' && e.created_at).map((e: any) => e.created_at);
                    if (pushTimes.length) {
                        const latest = pushTimes.sort().reverse()[0];
                        setLastCommitAgo(timeAgo(new Date(latest)));
                    }
                }
            })
            .catch(() => null);
    }, []);

    const iconFor = (lang: string | undefined) => {
        if (!lang) return <Code size={18} />;
        const l = lang.toLowerCase();
        if (l.includes('python')) return <Cloud size={18} />;
        if (l.includes('rust')) return <Shield size={18} />;
        if (l.includes('sql') || l.includes('postgres') || l.includes('db')) return <Database size={18} />;
        return <Code size={18} />;
    };

    function timeAgo(date: Date) {
        const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
        const intervals: [number, string][] = [
            [31536000, 'yr'],
            [2592000, 'mo'],
            [86400, 'd'],
            [3600, 'h'],
            [60, 'm'],
            [1, 's']
        ];
        for (const [sec, label] of intervals) {
            const val = Math.floor(seconds / sec);
            if (val >= 1) return `${val}${label}_AGO`;
        }
        return 'just_now';
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-20 px-6 max-w-7xl mx-auto w-full"
        >
            <section className="mb-12">
                <pre className="text-primary-green crt-glow font-mono font-bold leading-none text-[0.7rem] md:text-[0.95rem] lg:text-[1.05rem] whitespace-pre"
                    style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace', lineHeight: 1 }}
                >
                    {dedent(`
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗ ████████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝ ╚══██╔══╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║         ██║   
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║         ██║   
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗    ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝    ╚═╝  
          `)}
                </pre>
                <div className="mt-4 flex items-center gap-2 mb-2">
                    <span className="text-primary-green font-bold">DIRECTORY:</span>
                    <a
                        href="https://github.com/priyanshuarya22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#2a2a2a] px-2 text-white max-w-full wrap-break-word break-all whitespace-normal hover:underline"
                        title="Open GitHub profile"
                    >/root/projects/github.com/priyanshuarya22</a>
                </div>
                <div className="h-px w-full bg-[#474747] opacity-20 mb-4"></div>
                <p className="text-[#c6c6c6] text-sm max-w-2xl">
                    SYSTEM_LOG: Initializing repository grid... Fetching metadata for 12 active modules. Filtering by deployment status: [STABLE].
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loadingRepos && (
                    <div className="col-span-full text-center text-primary-green">Loading repositories...</div>
                )}
                {!loadingRepos && (!repos || repos.length === 0) && (
                    <div className="col-span-full text-center text-primary-green">No repositories found.</div>
                )}
                {!loadingRepos && repos && repos.map(repo => (
                    <div key={repo.id} className="border border-primary-green bg-[#0e0e0e] p-4 group hover:bg-primary-green/5 transition-all shadow-[0_0_8px_rgba(0,246,62,0.1)]">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs text-[#0d4508]">[{repo.id}]</span>
                            <span className="text-primary-green">{iconFor(repo.tags && repo.tags[0])}</span>
                        </div>
                        <h3 className="text-primary-green font-bold mb-2 text-lg uppercase tracking-tight">{repo.title}</h3>
                        <p className="text-xs text-[#c6c6c6] mb-6 leading-relaxed">{repo.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {(repo.tags || []).map((tag: string) => (
                                <span key={tag} className="text-[10px] border border-primary-green px-1 py-0.5">{tag}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-mono text-primary-green pt-4 border-t border-[#474747]/30">
                            <div className="flex gap-4">
                                <span>STARS: {repo.stars}</span>
                                <span>FORKS: {repo.forks}</span>
                            </div>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group-hover:translate-x-1 transition-transform cursor-pointer underline">VIEW_SRC -&gt;</a>
                        </div>
                    </div>
                ))}

                <div className="border border-dashed border-primary-green/30 bg-transparent p-4 flex flex-col items-center justify-center opacity-50">
                    <div className="w-8 h-8 border border-primary-green flex items-center justify-center mb-2">+</div>
                    <p className="text-[10px] font-mono tracking-widest uppercase">Initializing_New_Repo...</p>
                    <p className="text-[10px] font-mono mt-1">EST_COMPLETION: Q3_2024</p>
                </div>
            </div>

            <section className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'TOTAL_REPOS', val: (totalReposCount ?? (repos ? repos.length : null)) },
                    { label: 'CONTRIBUTIONS', val: (contributionsCount ?? '—') },
                    { label: 'SYS_UPTIME', val: '99.98%' },
                    { label: 'LAST_COMMIT', val: (lastCommitAgo ?? '—') }
                ].map(stat => (
                    <div key={stat.label} className="bg-[#1f1f1f] p-4 border-l-2 border-primary-green">
                        <div className="text-[10px] text-[#c6c6c6] mb-1">{stat.label}</div>
                        <div className="text-xl font-bold text-primary-green">{stat.val ?? '—'}</div>
                    </div>
                ))}
            </section>

            <div className="mt-12 mb-8 text-center text-xs opacity-40">
                <span className="text-primary-green">&gt;</span> sudo apt-get install more-projects
                <span className="inline-block w-2 h-4 bg-primary-green align-middle ml-1 cursor-blink"></span>
            </div>
        </motion.div>
    );
}

export default ProjectsScreen;
