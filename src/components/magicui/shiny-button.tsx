"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ShinyButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.button
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 border border-white/10 text-white bg-black hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </motion.button>
  );
}