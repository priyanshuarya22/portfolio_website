import React from 'react';

export const dedent = (s: string) => {
    const lines = s.replace(/\r/g, '').split('\n');
    while (lines.length && lines[0].trim() === '') lines.shift();
    while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
    const indents = lines.filter(l => l.trim()).map(l => (l.match(/^(\s*)/) || ['', ''])[1].length);
    const minIndent = indents.length ? Math.min(...indents) : 0;
    return lines.map(l => l.slice(minIndent)).join('\n');
};

export function timeAgo(date: Date) {
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

export type Screen = 'HOME' | 'EXP' | 'SKILLS' | 'PROJ';

export default {};
