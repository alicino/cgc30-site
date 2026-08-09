import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Bell } from 'lucide-react';
import { EVENTS } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
const MONTHS_PT = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
export function CalendarioPage() {
  const handleReminderClick = (title: string) => {
    toast.success("Lembrete agendado!", {
      description: `Notificaremos você sobre "${title}" 24h antes do evento.`
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Calendário da LXXXIV Gestão Administrativa</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            2º Semestre de 2026
          </p>
        </div>
        <div className="space-y-6">
          {EVENTS.map((event) => {
            const [day, month, year] = event.date.split('/');
            const monthLabel = MONTHS_PT[parseInt(month, 10) - 1] ?? '';
            return (
              <Card key={event.id} className="group overflow-hidden hover:border-primary transition-colors border-l-4 border-l-secondary">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary text-primary-foreground p-6 flex flex-col items-center justify-center text-center w-full md:w-48 shrink-0">
                      <CalendarIcon className="h-7 w-7 mb-2" />
                      <span className="font-bold text-base leading-snug">{day} de {monthLabel}</span>
                      <span className="text-sm opacity-80 mt-1">{year}</span>
                    </div>
                    <div className="p-8 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-primary border-primary">{event.type}</Badge>
                          </div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                        </div>
                        <div className="shrink-0 sm:w-44 space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> {event.time}</div>
                          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> {event.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => handleReminderClick(event.title)}
                          title="Lembre-me"
                          className="p-2 rounded-full hover:bg-accent transition-colors focus:ring-2 focus:ring-primary focus:outline-none"
                        >
                          <Bell className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}