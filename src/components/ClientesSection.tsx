import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ClientesSection = () => {
  const clientesFotos = [
    { 
      id: 1, 
      url: "/lovable-uploads/162f4f8b-67b9-4c58-8b96-831773281a9f.webp", 
      alt: "Armários de cozinha planejados montados profissionalmente" 
    },
    { 
      id: 2, 
      url: "/lovable-uploads/b6527d52-a73f-430f-93c1-6631d9d548a3.webp", 
      alt: "Guarda-roupas com portas deslizantes em madeira" 
    },
    { 
      id: 3, 
      url: "/lovable-uploads/3f91d2ee-5058-46c5-b435-8e4759cfebc1.webp", 
      alt: "Mesa de escritório com gavetas e apoio para notebook" 
    },
    { 
      id: 4, 
      url: "/lovable-uploads/936c0be2-4e4b-45d9-b89c-2f280c860cc0.webp", 
      alt: "Estante biblioteca com gavetas e prateleiras" 
    },
    { 
      id: 5, 
      url: "/lovable-uploads/b2148e54-533f-4732-adc7-773a39353a09.webp", 
      alt: "Berço de bebê montado com cômoda" 
    },
    { 
      id: 6, 
      url: "/lovable-uploads/833b678a-3186-492f-a808-b1397e62ba82.webp", 
      alt: "Organizadores de gavetas sob medida" 
    },
    { 
      id: 7, 
      url: "/lovable-uploads/bf935e72-c0a9-4bd6-83ca-eb32ecde42f5.webp", 
      alt: "Painel de TV suspenso com madeira ripada" 
    },
    { 
      id: 8, 
      url: "/lovable-uploads/0b0bc8f3-40a1-4e86-988b-9629db62e6e5.webp", 
      alt: "Rack para TV com painel decorativo em madeira" 
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 bg-creme transition-all duration-1000 animate-fade-up opacity-100">
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-dourado/30 to-transparent absolute top-0 left-0" />
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display responsive-heading font-bold mb-4">
            <span className="text-espresso">Clientes </span>
            <span className="text-dourado">Satisfeitos</span>
          </h2>
          <p className="responsive-text text-on-light-muted max-w-2xl mx-auto">
            Veja alguns dos trabalhos realizados em residências de Fernandópolis, Jales, Votuporanga, Valentim Gentil e Região Noroeste Paulista
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clientesFotos.map((foto) => (
                <CarouselItem 
                  key={foto.id} 
                  className="pl-2 md:pl-4 basis-[45%] md:basis-1/2 lg:basis-1/4"
                >
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 border-mogno/30">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={foto.url}
                        alt={foto.alt}
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={400}
                        sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 45vw"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navegação */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-creme border-mogno/40 hover:border-dourado text-mogno hover:text-dourado shadow-lg" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-creme border-mogno/40 hover:border-dourado text-mogno hover:text-dourado shadow-lg" />
            </div>
          </Carousel>
          
          {/* Indicação de arrastar no mobile */}
          <div className="md:hidden text-center mt-4">
            <p className="text-xs text-on-light-muted flex items-center justify-center gap-2">
              <span>←</span>
              Arraste para ver mais fotos
              <span>→</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientesSection;
