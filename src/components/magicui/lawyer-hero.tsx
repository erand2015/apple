"use client";
import { motion } from "framer-motion";

export default function LawyerHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image me Mjegull Gold */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" 
          className="h-full w-full object-cover opacity-30 grayscale hover:scale-105 transition-transform duration-[10s]"
          alt="Justice Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.6em" }}
            className="text-primary text-[10px] uppercase font-bold mb-8"
          >
            Etabluar në 1998
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-reflect text-6xl md:text-[12rem] font-serif italic text-white leading-none mb-12"
          >
            LexElite
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            className="h-px bg-primary mb-12"
          />

          <p className="max-w-2xl text-slate-400 font-light text-lg leading-relaxed tracking-wide italic font-serif">
            "Drejtësia nuk është thjesht një procedurë, është një art i mbrojtjes së të vërtetës."
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/30">Zbuloni Ekspertizën</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}