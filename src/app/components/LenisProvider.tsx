'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

function LenisProvider() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return null;
}

export default LenisProvider;
