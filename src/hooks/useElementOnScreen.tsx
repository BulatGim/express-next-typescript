import {useEffect, useRef, useState} from "react";

interface IOptions {
    root: null;
    rootMargin: string;
    threshold: number;
}

export const useElementOnScreen = (options:IOptions) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const [isVisible, setIsVisible] = useState(false);

    const callBackFn = (entries: IntersectionObserverEntry[] )=>{
        const [entry] = entries;
        setIsVisible(entry.isIntersecting)
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callBackFn, options)

        if(containerRef.current) observer.observe(containerRef.current)

        return ()=>{
            if(containerRef.current) observer.unobserve(containerRef.current)
        }

    }, [containerRef, options])
    return [containerRef, isVisible]
};