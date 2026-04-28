import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="bg-foreground text-background py-24 md:py-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Hairline grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute left-[25%] top-0 bottom-0 w-px bg-background" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-background" />
        <div className="absolute left-[75%] top-0 bottom-0 w-px bg-background" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-background/40 mb-8"
        >
          <span className="text-primary mr-3">04</span> Начни прямо сейчас
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-inter font-bold leading-tight mb-6"
        >
          Хватит откладывать.
          <br />
          <span className="text-primary">Первая тренировка — сегодня.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg font-inter font-light text-background/50 mb-16 max-w-md mx-auto"
        >
          Оставь почту — и получишь готовую программу через минуту.
          Без карты, без обязательств. Просто попробуй.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-transparent border-0 border-b border-primary/50 focus:border-primary text-background font-mono text-base md:text-lg py-4 pr-40 placeholder:text-background/20 focus:outline-none focus:ring-0 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 group inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider px-6 py-3 hover:bg-primary/90 transition-colors"
                >
                  Получить план
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="font-mono text-sm text-primary uppercase tracking-wider mb-2">
                Готово
              </div>
              <div className="font-inter text-lg text-background/70 font-light">
                Проверь почту — план уже там. Удачи на первой тренировке.
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 font-mono text-xs text-background/20 uppercase tracking-wider"
        >
          Без карты · Отменить можно в любой момент · 14 дней бесплатно
        </motion.div>
      </div>
    </section>
  );
}