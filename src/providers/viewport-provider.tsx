'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ViewportContextType {
    isMobile: boolean;
    width: number;
    height: number;
}

const ViewportContext = createContext<ViewportContextType | undefined>(undefined);

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [width, setWidth] = useState(2000);
    const [height, setHeight] = useState(2000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1025); // breakpoint tùy chỉnh
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        handleResize(); // set lần đầu
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ViewportContext.Provider value={{ isMobile, width, height }}>
            {children}
        </ViewportContext.Provider>
    );
};

export const useViewportContext = (): ViewportContextType => {
    const context = useContext(ViewportContext);
    if (!context) {
        throw new Error('useViewport must be used within a ViewportProvider');
    }
    return context;
};
