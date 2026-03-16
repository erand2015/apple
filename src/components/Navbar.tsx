"use client";

import { motion } from "framer-motion";
import { Smartphone, Menu, ShoppingCart } from "lucide-react";

export default function TechNavbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5 px-6 h-16 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Smartphone className="text-cyan-500 w-6 h-6" />
        <span className="font-black tracking-tighter text-xl">TITAN X</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">Specifikat</a>
        <a href="#" className="hover:text-white transition-colors">Kamera</a>
        <a href="#" className="hover:text-white transition-colors">Neural Core</a>
        <a href="#" className="hover:text-white transition-colors text-cyan-500">Bli Tani</a>
      </div>

      <div className="flex items-center gap-4">
        <ShoppingCart className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
        <Menu className="w-5 h-5 md:hidden text-white" />
      </div>
    </motion.nav>
  );
}