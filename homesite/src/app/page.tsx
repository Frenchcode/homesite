'use client'

import { FloatingNavBar } from "@/components/ui/floating-navbar";
import { useEffect, useRef } from "react";


export default function Home() {
  const blobArea = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const blob = blobArea.current;
      if (blob) {
        const half = blob.offsetWidth / 2;
        blob.style.left = `${event.clientX - half}px`;
        blob.style.top = `${event.clientY - half}px`;
      }
    };
    document.body.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.body.addEventListener('mousemove', handleMouseMove);
    }
  }, []);


  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id="overlay"></div>
      <div id="blob" ref={blobArea}></div>
      <FloatingNavBar />
    </main>
    </>
  );
}
