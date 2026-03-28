import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted mt-auto border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="font-playfair text-xl font-bold">Capítulo Grande Campinas nº 30</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Formando jovens líderes de 12 a 21 anos através das 7 virtudes cardeais da Ordem DeMolay.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Contato do Capítulo</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> contato@cgc30.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Av. Orosimbo Maia, 280 - Centro, Campinas - SP, 13010-211
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cgc_30/" className="text-muted-foreground hover:text-primary transition-colors text-sm" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/demolaycampinas" className="text-muted-foreground hover:text-primary transition-colors text-sm" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">YouTube</a>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Ordem DeMolay - Capítulo Grande Campinas nº 30. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacidade</a>
            <a href="#" className="hover:text-primary">Regulamento Interno</a>
          </div>
        </div>
      </div>
    </footer>
  );
}