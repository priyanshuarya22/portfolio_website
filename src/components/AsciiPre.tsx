import React, { useLayoutEffect, useRef, useState } from 'react';

const AsciiPre = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => {
    const preRef = useRef<HTMLElement | null>(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        const el = preRef.current as HTMLElement | null;
        if (!el) return;
        const wrapper = el.parentElement as HTMLElement;

        const fit = () => {
            const parentW = wrapper ? wrapper.clientWidth : el.clientWidth;
            const scrollW = el.scrollWidth || el.clientWidth;
            const s = Math.min(1, parentW / scrollW);
            setScale(s);
        };

        fit();
        const onResize = () => fit();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [children]);

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <pre
                ref={preRef as any}
                className={className}
                style={{ ...style, transform: `scale(${scale})`, transformOrigin: 'left top', display: 'block' }}
            >
                {children}
            </pre>
        </div>
    );
};

export default AsciiPre;
