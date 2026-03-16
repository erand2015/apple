"use client";
import { motion } from "framer-motion";
import { Shield, Gavel, Scale, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  { 
    title: "E Drejta Korporative", 
    icon: Briefcase, 
    desc: "Strategji ligjore për asetet tuaja tregtare, strukturimin dhe mbrojtjen e kapitalit." 
  },
  { 
    title: "Mbrojtje Penale", 
    icon: Gavel, 
    desc: "Përfaqësim rigoroz në çdo shkallë gjykimi me fokus mbrojtjen e integritetit tuaj." 
  },
  { 
    title: "Konsulencë Private", 
    icon: Shield, 
    desc: "Konfidencialitet i plotë për individë elitë dhe menaxhim i çështjeve diskrete." 
  },
  { 
    title: "Arbitrazh", 
    icon: Scale, 
    desc: "Zgjidhje efikase e konflikteve ndërkombëtare përmes ndërmjetësimit strategjik." 
  }
];

export default function LegalServices() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="services">
      {/* Dekorim subtil në sfond */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Titulli Editorial */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-primary mb-4 font-bold italic">Ekspertiza</h2>
            <div className="h-[1px] w-24 bg-primary/30 mb-8" />
            <h3 className="text-5xl md:text-7xl font-serif italic text-white leading-[1.1] tracking-tighter">
              Standarde të Reja <br /> në Jurisprudencë.
            </h3>
          </motion.div>
        </div>

        {/* Grid-i Profesional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="group corner-accent bg-background p-12 transition-all duration-500 min-h-[450px] flex flex-col justify-between cursor-default relative overflow-hidden"
            >
              {/* Efekti i shkëlqimit subtil në Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-12 inline-block">
                   <service.icon className="w-10 h-10 text-primary/40 group-hover:text-primary transition-colors duration-500 stroke-[1px]" />
                </div>
                <h4 className="text-2xl font-serif italic text-white mb-6 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h4>
                <p className="text-slate-500 font-light leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
              
              <div className="relative z-10 mt-12 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Detaje +
                </span>
                <ArrowUpRight className="w-4 h-4 text-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}