import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, Zap, Smartphone, Brain } from "lucide-react";

const benefits = [
  {
    icon: Fingerprint,
    tag: "MODULE_01",
    title: "Только для тебя",
    description: "Программа строится под твои цели, расписание и физическую форму. Не шаблон из интернета — план, который реально подходит именно тебе.",
    metric: "Эффективность: 97.3%",
  },
  {
    icon: Zap,
    tag: "MODULE_02",
    title: "15 минут в день",
    description: "Короткие тренировки, которые реально работают. Без часовых марафонов в зале — вписывается в любой день, даже самый загруженный.",
    metric: "Экономия: 4.2 ч/нед",
  },
  {
    icon: Smartphone,
    tag: "MODULE_03",
    title: "Дома, в зале, в дороге",
    description: "Открываешь на телефоне — и вперёд. Без оборудования, без абонемента. Программа адаптируется под то, что есть у тебя прямо сейчас.",
    metric: "Доступность: 100%",
  },
  {
    icon: Brain,
    tag: "MODULE_04",
    title: "Растём вместе с тобой",
    description: "После каждой тренировки система анализирует твой прогресс и корректирует нагрузку. Ты не топчешься на месте — всегда двигаешься вперёд.",
    metric: "Прогресс: +12%/мес",
  },
];

function BenefitCard({ benefit, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-background border border-border p-8 md:p-10 flex flex-col justify-between hover:border-primary/40 transition-colors duration-500"
    >
      {/* Top row */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {benefit.tag}
          </div>
          <benefit.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>

        <h3 className="text-xl md:text-2xl font-inter font-bold text-foreground mb-4 leading-tight">
          {benefit.title}
        </h3>
        
        <p className="text-base font-inter font-light text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
      </div>

      {/* Bottom metric */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="font-mono text-xs text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {benefit.metric}
        </div>
      </div>
    </motion.div>
  );
}

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" ref={ref} className="py-24 md:py-40 relative">
      <div className="px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          <span className="text-primary mr-3">02</span> Почему это работает
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-inter font-bold text-foreground leading-tight max-w-2xl"
        >
          Всё, что нужно —
          <br />
          <span className="text-primary">и ничего лишнего.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 md:px-12">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={benefit.tag}
            benefit={benefit}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}