"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const PHONE_PRODUCTS = [
  { id: 1, name: "Titan Pro X", cat: "Phone", price: "1,199 €", old: "1,399 €", img: "https://images.pexels.com/photos/805922/pexels-photo-805922.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Hot" },
  { id: 101, name: "Titan Neo", cat: "Phone", price: "699 €", old: "799 €", img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Best Value" },
];

export default function TelefonaPage({ onBack }: { onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
      className="min-h-screen bg-white"
    >
      <section className="py-20 px-4 md:px-12 max-w-[1600px] mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-blue-600 font-mono text-[10px] uppercase mb-8 hover:gap-4 transition-all tracking-widest">
          <ChevronLeft size={14}/> Kthehu te Faqja Kryesore
        </button>
        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-10">Seria Titan Phone.</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PHONE_PRODUCTS.map(p => (
            <div key={p.id} className="group relative bg-zinc-100 rounded-[2rem] md:rounded-[3rem] p-px overflow-hidden shadow-sm">
              <div className="absolute inset-0 z-0 bg-white" />
              <div className="absolute -inset-[100%] z-10 animate-lumina-wave bg-[conic-gradient(from_0deg,transparent_0,transparent_25%,#2563eb_50%,transparent_75%,transparent_100%)] opacity-0 group-hover:opacity-100 duration-500 pointer-events-none" />
              <div className="relative z-20 bg-white rounded-[1.95rem] md:rounded-[2.95rem] p-6 md:p-10 m-[1px]">
                <div className="relative h-60 overflow-hidden rounded-2xl mb-8 bg-zinc-100">
                  <div className="absolute top-4 left-4 z-20 bg-blue-600 text-[8px] font-black px-3 py-1 rounded-full uppercase italic text-white">{p.tag}</div>
                  <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex justify-between items-start mb-6 text-left">
                  <div>
                    <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">{p.cat}</span>
                    <h4 className="text-xl font-black italic uppercase mt-1">{p.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-zinc-500 line-through">{p.old}</p>
                    <p className="text-xl font-black text-blue-500 italic">{p.price}</p>
                  </div>
                </div>
                <button className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all">Shto në shportë</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}