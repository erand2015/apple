"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        scrolled 
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" 
          : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO - Stil Editorial */}
        <div className="text-2xl font-serif italic tracking-tighter text-white select-none">
          LEX<span className="text-primary font-sans not-italic font-black ml-1">ELITE</span>
        </div>
        
        {/* MENU - Tipografi e stilit Swiss/Minimalist */}
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
          <a href="#services" className="hover:text-primary transition-colors duration-300">Ekspertiza</a>
          <a href="#philosophy" className="hover:text-primary transition-colors duration-300">Filozofia</a>
          <a href="#contact" className="hover:text-primary transition-colors duration-300">Zyrat</a>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:+355" 
            className="hidden lg:block text-[10px] uppercase tracking-widest font-bold text-white/50 hover:text-primary transition-colors"
          >
            +355 6X XX XX XXX
          </a>
          <Button 
            className="bg-primary text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-none px-8 py-6 hover:bg-white transition-all duration-500"
          >
            Konsultë Private
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}