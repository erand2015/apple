"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, Search, ChevronRight, ShieldCheck, 
  Truck, RotateCcw, CreditCard, Plus 
} from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    category: "E RE",
    title: "Titan Pro X",
    subtitle: "Fuqia e inteligjencës artificiale në duart tuaja.",
    price: "Nga 1,199 € ose 49.90 €/muaj",
    img: "https://images.pexels.com/photos/805922/pexels-photo-805922.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "light",
  },
  {
    id: 2,
    category: "PRO",
    title: "M2 Ultra Display",
    subtitle: "Për ata që krijojnë të ardhmen.",
    price: "Nga 1,599 €",
    img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "dark",
  }
];

const NEW_PRODUCTS = [
  { id: 101, name: "Titan Pad Air", price: "649 €", img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "New" },
  { id: 102, name: "MacBook Pro M3", price: "1,999 €", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800", tag: "Best Seller" },
  { id: 103, name: "Titan Audio Pro", price: "249 €", img: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "Sale" },
  { id: 104, name: "Neural Watch", price: "399 €", img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800", tag: "New" },
];

export default function TitanStore() {
  return (
    <main className="bg-white text-[#1d1d1f] font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR I PËRSHTATUR PËR DYQAN */}
      <nav className="fixed top-0 w-full z-[200] bg-white/80 backdrop-blur-2xl border-b border-[#d2d2d7]/30">
        <div className="max-w-[1024px] mx-auto h-12 flex items-center justify-between px-6">
          <div className="text-xl font-bold tracking-tighter cursor-pointer hover:opacity-70 transition-all">TITAN.</div>
          <div className="hidden md:flex gap-8 text-[12px] font-medium text-[#1d1d1f]/80">
            <button className="hover:text-blue-600 transition-colors">Telefona</button>
            <button className="hover:text-blue-600 transition-colors">Laptopë</button>
            <button className="hover:text-blue-600 transition-colors">Tableta</button>
            <button className="hover:text-blue-600 transition-colors">Ora Inteligjente</button>
            <button className="hover:text-blue-600 transition-colors">Aksesorë</button>
            <button className="text-red-600 font-bold hover:text-red-500 transition-colors">Ofertat %</button>
          </div>
          <div className="flex items-center gap-5">
            <Search size={18} className="cursor-pointer hover:opacity-60 transition-opacity" />
            <div className="relative cursor-pointer group">
              <ShoppingBag size={18} className="group-hover:opacity-60 transition-opacity" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">4</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTIONS - FULL SCREEN */}
      <section className="w-full">
        {HERO_SLIDES.map((slide) => (
          <div key={slide.id} className="relative h-screen w-full flex flex-col items-center justify-start overflow-hidden border-b-8 border-white">
            <div className="absolute inset-0 z-0">
              <img src={slide.img} className="w-full h-full object-cover" alt={slide.title} />
              <div className={`absolute inset-0 ${slide.theme === 'dark' ? 'bg-black/20' : 'bg-white/5'}`} />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`relative z-10 text-center pt-28 px-4 ${slide.theme === 'dark' ? 'text-white' : 'text-[#1d1d1f]'}`}
            >
              <span className="text-orange-500 font-extrabold text-sm tracking-[0.2em] mb-3 block">{slide.category}</span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">{slide.title}</h1>
              <p className="text-xl md:text-3xl font-medium mb-2 opacity-90">{slide.subtitle}</p>
              <p className="text-lg opacity-70 mb-8">{slide.price}</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <button className="bg-[#0071e3] text-white px-10 py-3.5 rounded-full font-bold text-lg hover:bg-[#0077ed] hover:scale-105 transition-all shadow-lg">Bli Tani</button>
                <button className={`flex items-center gap-1 text-xl font-medium hover:underline group ${slide.theme === 'dark' ? 'text-blue-400' : 'text-[#0066cc]'}`}>
                  Shiko Detajet <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* 3. SHËRBIMET E DYQANIT */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 rounded-3xl bg-[#f5f5f7] hover:shadow-xl transition-shadow">
            <Truck size={40} className="mb-4 mx-auto text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Transport Falas</h3>
            <p className="text-[#86868b] text-sm">Për çdo porosi mbi 100€ në të gjithë Shqipërinë.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#f5f5f7] hover:shadow-xl transition-shadow">
            <CreditCard size={40} className="mb-4 mx-auto text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Pagesë me Këste</h3>
            <p className="text-[#86868b] text-sm">Mundësi pagese deri në 24 muaj me 0% interes.</p>
          </div>
          <div className="p-8 rounded-3xl bg-[#f5f5f7] hover:shadow-xl transition-shadow">
            <ShieldCheck size={40} className="mb-4 mx-auto text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Garanci 2-Vjeçare</h3>
            <p className="text-[#86868b] text-sm">Mbështetje teknike dhe riparime të certifikuara.</p>
          </div>
        </div>
      </section>

      {/* 4. SEKSIONI I RI: PRODUKTE TË TJERA (GRID KOLEKSIONI) */}
      <section className="py-24 bg-[#f5f5f7] px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">Koleksioni i Fundit.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEW_PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-[2.5rem] flex flex-col items-center shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-2xl">
                  <span className="absolute top-2 left-2 bg-zinc-100 text-[10px] font-bold px-2 py-1 rounded-md z-10">{product.tag}</span>
                  <img src={product.img} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-blue-600 font-semibold mb-6">{product.price}</p>
                <button className="w-full py-3 bg-[#f5f5f7] hover:bg-black hover:text-white rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2 group">
                  Shto në shportë <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER INFORMACIONI */}
      <footer className="bg-[#f5f5f7] py-16 px-6 border-t border-[#d2d2d7]">
        <div className="max-w-[1024px] mx-auto text-[12px] text-[#424245]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="font-bold text-black mb-4">Dyqani</h4>
              <ul className="space-y-2"><li>Gjej Dyqanin</li><li>Statusi i Porosisë</li><li>Mënyrat e Pagesës</li></ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Suporti</h4>
              <ul className="space-y-2"><li>Qendra e Ndihmës</li><li>Riparimet</li><li>Kontakto Ne</li></ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Llogaria</h4>
              <ul className="space-y-2"><li>Menaxho Llogarinë</li><li>Titan Cloud</li><li>Historia e Blerjeve</li></ul>
            </div>
            <div>
              <h4 className="font-bold text-black mb-4">Rreth Nesh</h4>
              <ul className="space-y-2"><li>Lajmet</li><li>Karriera</li><li>Mjedisi</li></ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#d2d2d7] flex flex-col md:flex-row justify-between">
            <p>© 2026 Titan Electronics Albania. Të gjitha të drejtat e rezervuara.</p>
            <div className="flex gap-4 mt-4 md:mt-0"><span>Politika e Privatësisë</span><span>Kushtet e Blerjes</span></div>
          </div>
        </div>
      </footer>
    </main>
  );
}