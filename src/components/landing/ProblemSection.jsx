const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CHAOS_IMAGE = "\images\buildings-city-sunset-5k-wb.jpg";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" ref={ref} className="py-24 md:py-40 px-6 md:px-12 relative">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-16"
      >
        <span className="text-primary mr-3">01</span> Почему большинство бросает
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Tile 01: Time */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] overflow-hidden group"
        >
          <img
            src={CHAOS_IMAGE}
            alt="Blurred chaotic city representing time scarcity"
            className="absolute inset-0 w-full h-full object-cover filter blur-[2px] group-hover:blur-0 transition-all duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-foreground/70" />
          
          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
            <div className="font-mono text-xs uppercase tracking-widest text-white/40">
              Сигнал // 001
            </div>
            
            <div>
              <div className="font-mono text-sm md:text-base text-primary mb-4 tracking-wider">
                НЕТ ВРЕМЕНИ — НЕТ ТРЕНЕРА
              </div>
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-white leading-tight">
                Записался — и не дошёл.
                <br />
                <span className="text-white/50 font-light">Работа, семья, усталость. Зал ждёт.</span>
              </h3>
            </div>

            <div className="font-mono text-xs text-white/30 uppercase tracking-wider">
              Знакомо?
            </div>
          </div>
        </motion.div>

        {/* Tile 02: Knowledge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] overflow-hidden bg-secondary group"
        >
          {/* Overlapping text layers */}
          <div className="absolute inset-0 p-8 md:p-12 opacity-[0.06]">
            <div className="text-4xl md:text-6xl font-inter font-bold leading-tight text-foreground">
              Качай грудь пн/ср/пт<br/>
              10 подходов по 10 раз<br/>
              Пей протеин<br/>
              Делай кардио 3 раза<br/>
              Качай грудь пн/ср/пт<br/>
              10 подходов по 10 раз
            </div>
          </div>

          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Сигнал // 002
            </div>

            <div>
              <div className="inline-block bg-background border border-border p-4 md:p-6 mb-4">
                <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2">
                  Интернет переполнен советами
                </div>
                <div className="font-mono text-sm text-muted-foreground">
                  Ни один не написан для тебя
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-inter font-bold text-foreground leading-tight">
                Непонятно, с чего начать.
                <br />
                <span className="text-muted-foreground font-light">Советов много — результата нет.</span>
              </h3>
            </div>

            <div className="font-mono text-xs text-muted-foreground/50 uppercase tracking-wider">
              Знакомо?
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}