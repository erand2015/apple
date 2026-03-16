"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";
import RetroGrid from "./retro-grid";
import ShinyButton from "./shiny-button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background pt-20">
      {/* Sfondi me rrjetë dhe dritë qendrore */}
      <RetroGrid className="opacity-30" />
      
      {/* Glow Effect - Ky i jep pamjen premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-6 border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1 backdrop-blur-md">
            Versioni 2.0 është live <ChevronRight className="ml-1 h-3 w-3" />
          </Badge>
          
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl mb-8">
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Build for the 
            </span>
            <br />
            <span className="text-white">Future.</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            Platforma jonë kombinon dizajnin minimalist me performancën brutale. 
            Krijuar për ekipe që nuk pranojnë asgjë më pak se perfeksionin.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShinyButton className="h-14 px-10 text-lg">
              Fillo falas sot
            </ShinyButton>
            
            <Button variant="ghost" size="lg" className="h-14 px-8 text-white hover:bg-white/5 group">
              Shiko Demom <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        {/* Floating Stats - Detaj premium */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 grid grid-cols-2 gap-8 divide-x divide-white/10 md:grid-cols-4"
        >
          {[
            ["250k+", "Përdorues"],
            ["99.9%", "Uptime"],
            ["< 10ms", "Latencë"],
            ["$50M+", "Transaksione"],
          ].map(([val, label]) => (
            <div key={label} className="px-8">
              <div className="text-2xl font-bold text-white">{val}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}