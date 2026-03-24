import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, Bell } from 'lucide-react';
import { EVENTS } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
export function CalendarioPage() {
  const handleDetailsClick = (title: string) => {
    toast.info(`Acessando detalhes da convocação: ${title}`, {
      description: "As informações completas estão sendo carregadas."
    });
  };
  const handleReminderClick = (title: string) => {
    toast.success("Lembrete agendado!", {
      description: `Notificaremos você sobre "${title}" 24h antes do evento.`
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Agenda Ritualística</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Fique atento às nossas próximas reuniões, cerimônias de iniciação e projetos filantrópicos no Capítulo nº 30.
          </p>
        </div>
        <div className="space-y-6">
          {EVENTS.map((event) => {
            const dateParts = event.date.split(',');
            const dayPart = dateParts[0]?.trim() ?? "";
            const yearPart = dateParts[1]?.trim() ?? "";
            return (
              <Card key={event.id} className="group overflow-hidden hover:border-primary transition-colors border-l-4 border-l-secondary">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary text-primary-foreground p-8 flex flex-col items-center justify-center text-center min-w-[160px]">
                      <CalendarIcon className="h-8 w-8 mb-2" />
                      <span className="font-bold text-xl leading-tight">{dayPart}</span>
                      <span className="text-xs opacity-80 uppercase tracking-widest">{yearPart}</span>
                    </div>
                    <div className="p-8 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-primary border-primary">Evento Oficial</Badge>
                            {event.id === 1 && <Badge className="bg-secondary text-secondary-foreground animate-pulse">Urgente</Badge>}
                          </div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {event.time}</div>
                          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {event.location}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {event.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => handleDetailsClick(event.title)}
                          className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all focus:outline-none focus:underline"
                        >
                          Detalhes da Convocação <ChevronRight className="h-4 w-4" />
                        </button>
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