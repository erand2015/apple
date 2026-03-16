"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PremiumReveal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden bg-[#05070a]">
      {/* Background Image me Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070" 
          alt="Law and Justice"
          className="h-full w-full object-cover opacity-40 grayscale"
        />
      </motion.div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#05070a] via-primary/5 to-transparent animate-gradient" />

      {/* Content */}
      <div className="container relative z-20 mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">
              Mbrojtja juaj, Prioriteti Ynë
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif text-white italic leading-tight mb-8">
              Përfaqësim që <br />
              <span className="not-italic font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent animate-gradient">
                Ndryshon Historinë.
              </span>
            </h3>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed border-l-2 border-primary/30 pl-6">
              Në botën e ligjit, detajet janë gjithçka. Ne nuk premtojmë thjesht mbrojtje; ne ndërtojmë strategji fituese përmes saktësisë analitike.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}