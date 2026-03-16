"use client";

// Provo këtë nëse @studio-freight nuk punon
import { ReactLenis } from 'lenis/react' 
import { useEffect, useState } from "react";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Gjatë SSR (Server Side Rendering) kthejmë thjesht fëmijët pa bllokuar faqen
  if (!mounted) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}