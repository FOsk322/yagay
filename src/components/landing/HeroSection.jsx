const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "\public\images\athlete.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-16 relative overflow-hidden">
      {/* Hairline grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8.33%] top-0 bottom-0 w-px bg-border/40" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-border/40" />
        <div className="absolute left-[91.66%] top-0 bottom-0 w-px bg-border/40" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Left: Typography */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:pl-12 lg:pr-8 py-16 lg:py-0 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
          >
            Умный фитнес — v2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,8vw,7rem)] font-inter font-900 leading-[0.9] tracking-tight text-foreground -ml-1"
          >
            KINETIC
            <br />
            <span className="text-primary">INTELLIGENCE</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl font-inter font-light leading-relaxed text-muted-foreground max-w-lg"
          >
            Персональный тренинг без тренера. Программа подстраивается под твой
            режим, цели и уровень подготовки. Просто открываешь — и тренируешься.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-3 bg-foreground text-background font-mono text-sm uppercase tracking-wider px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Начать тренировки
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 flex gap-12"
          >
            <div>
              <div className="font-mono text-2xl font-bold text-foreground">15min</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">длина сессии</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-mono text-2xl font-bold text-foreground">100%</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">под тебя</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-mono text-2xl font-bold text-foreground">0</div>
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">лишних действий</div>
            </div>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden hidden lg:block"
        >
          <img
            src={HERO_IMAGE}
            alt="Professional athlete in motion captured with high-shutter-speed photography"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          
          {/* Coordinate overlay */}
          <div className="absolute bottom-8 right-8 font-mono text-xs text-white/60 text-right">
            <div>LAT 40.7128°</div>
            <div>LON −74.0060°</div>
            <div className="mt-2 text-primary">ТРЕНИРОВКА: АКТИВНА</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}