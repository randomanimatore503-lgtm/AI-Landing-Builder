import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onBookDemo: () => void;
}

export default function Navbar({ onBookDemo }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <img src="/logo.png" alt="LeadBridge Systems" className="h-9 w-9 object-contain" />
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none text-foreground">LeadBridge Systems</span>
            <span className="text-[10px] font-bold tracking-wider text-primary leading-none mt-1">NODEENGINE LIVE</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#plans" className="transition-colors hover:text-foreground">Plans</a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">How it Works</a>
          </div>
          <Button
            onClick={onBookDemo}
            className="bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/80 text-primary-foreground border-0 font-semibold shadow-lg shadow-primary/20"
          >
            Book Demo
          </Button>
        </nav>
      </div>
    </header>
  );
}
