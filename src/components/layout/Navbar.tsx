import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import demolayLogo from '@/assets/demolay-logo.png';
const NAV_LINKS = [
  { name: 'Início', href: '/' },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Downloads', href: '/downloads' },
  { name: 'Artigos', href: '/artigos' },
  { name: 'Calendário', href: '/calendario' },
  { name: 'Sobre Nós', href: '/sobre' },
];
export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={demolayLogo} alt="Capítulo Grande Campinas nº 30" className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-playfair text-lg font-bold leading-none tracking-tight">Grande Campinas</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Capítulo nº 30</span>
            </div>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.href ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle className="static ml-4" />
          </nav>
          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle className="static" />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left font-playfair font-bold text-xl">Navegação</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium p-2 rounded-md transition-colors",
                        location.pathname === link.href ? "bg-accent text-primary" : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}