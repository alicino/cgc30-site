import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
export function GaleriaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Nossa Trajetória em Fotos</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Registros visuais das nossas reuniões, cerimônias ritualísticas e atividades de lazer que fortalecem nossos laços fraternais.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-medium text-lg px-4 text-center">{img.alt}</p>
                    </div>
                  </AspectRatio>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}