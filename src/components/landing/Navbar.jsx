import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="flex items-center justify-between px-6 md:px-12 h-16">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="font-mono text-sm font-semibold tracking-widest uppercase text-foreground">
            Kinetic
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            Боль
          </a>
          <a href="#benefits" className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            Решение
          </a>
          <a href="#process" className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
            Как это работает
          </a>
        </div>

        <a
          href="#cta"
          className="bg-foreground text-background font-mono text-xs uppercase tracking-wider px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
        >
          Попробовать
        </a>
      </div>
    </motion.nav>
  );
}