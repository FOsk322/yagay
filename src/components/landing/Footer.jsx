export default function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-background/10 px-6 md:px-12 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="font-mono text-xs uppercase tracking-widest text-background/50">
            Kinetic Intelligence
          </span>
        </div>
        <div className="font-mono text-xs text-background/30 uppercase tracking-wider">
          © {new Date().getFullYear()} Все системы работают
        </div>
      </div>
    </footer>
  );
}