import React from 'react';
import { Download, Shield, FileCheck, ScrollText } from 'lucide-react';
import { DOWNLOAD_FILES } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
export function DownloadsPage() {
  const handleDownload = (fileName: string) => {
    toast.success("Download iniciado", {
      description: `O arquivo "${fileName}" está sendo baixado.`
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Central de Materiais</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Acesse estatutos, guias de estudo, formulários de inscrição e materiais de apoio para membros e interessados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOWNLOAD_FILES.map((file) => (
            <Card key={file.id} className="flex flex-col md:flex-row md:items-center hover:bg-accent/5 transition-colors border-l-4 border-l-primary group">
              <div className="p-6 flex items-center justify-center">
                <div className="p-4 rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  {file.name.includes('Estatuto') ? <Shield className="h-8 w-8" /> :
                   file.name.includes('Inscrição') ? <FileCheck className="h-8 w-8" /> : <ScrollText className="h-8 w-8" />}
                </div>
              </div>
              <div className="flex-1">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{file.name}</CardTitle>
                  <CardDescription>
                    {file.format} • {file.size} • Atualizado em {file.date}
                  </CardDescription>
                </CardHeader>
              </div>
              <CardFooter className="p-6 pt-0 md:pt-6">
                <Button 
                  onClick={() => handleDownload(file.name)}
                  className="w-full md:w-auto gap-2"
                >
                  <Download className="h-4 w-4" /> Baixar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}