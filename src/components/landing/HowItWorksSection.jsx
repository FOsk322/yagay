const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    label: "Регистрация",
    title: "Рассказываешь о себе",
    description: "Пара минут на анкету: цели, режим дня, уровень подготовки. Этого достаточно, чтобы система собрала программу именно под тебя.",
  },
  {
    number: "02",
    label: "Твой план готов",
    title: "Получаешь программу",
    description: "Никаких ожиданий. Сразу после регистрации у тебя есть план на ближайшие недели — с упражнениями, подходами и пояснениями.",
  },
  {
    number: "03",
    label: "В деле",
    title: "Тренируешься",
    description: "Открываешь приложение — видишь тренировку на сегодня. Следуешь инструкциям, отмечаешь выполненное. Система учитывает каждое занятие и улучшает план.",
  },
];

function StepItem({ step, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 * index, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 md:pl-16 pb-16 last:pb-0 group"
    >
      {/* Timeline line */}
      {index < steps.length - 1 && (
        <div className="absolute left-[1.15rem] md:left-[1.4rem] top-10 bottom-0 w-px bg-border group-hover:bg-primary/30 transition-colors duration-500" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center bg-background group-hover:border-primary/50 transition-colors duration-500">
        <span className="font-mono text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-500">
          {step.number}
        </span>
      </div>

      <div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">
          {step.label}
        </div>
        <h3 className="text-xl md:text-2xl font-inter font-bold text-foreground mb-3 leading-tight">
          {step.title}
        </h3>
        <p className="text-base font-inter font-light text-muted-foreground leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const MUSCLE_IMAGE = "https://media.db.com/images/public/69f0c47a69cd14aa00567cbb/23a7a8516_generated_6930c7d2.png";

  return (
    <section id="process" ref={ref} className="py-24 md:py-40 px-6 md:px-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Content */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
          >
            <span className="text-primary mr-3">03</span> Как это работает
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-inter font-bold text-foreground leading-tight mb-16"
          >
            Три шага —
            <br />
            <span className="text-primary">и ты уже тренируешься.</span>
          </motion.h2>

          <div>
            {steps.map((step, index) => (
              <StepItem key={step.number} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="sticky top-32">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={MUSCLE_IMAGE}
                alt="Extreme macro close-up of muscle tension and athletic performance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between font-mono text-xs text-muted-foreground uppercase tracking-wider">
              <span>Умная нагрузка</span>
              <span className="text-primary">Сессия активна</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}