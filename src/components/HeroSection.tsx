import { useState, useCallback, memo } from 'react';
import { Clock, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const heroTestimonials = [
  {
    initials: 'MFS',
    name: 'Maria Fernanda Silva',
    location: 'Votuporanga - SP',
    text: 'Serviço impecável! Montaram meu guarda-roupa de 6 portas em menos de 3 horas. Muito organizados e deixaram tudo limpo. Super recomendo!',
  },
  {
    initials: 'JCO',
    name: 'João Carlos Oliveira',
    location: 'Fernandópolis - SP',
    text: 'Precisava desmontar meus móveis para mudança. Fizeram tudo com muito cuidado, etiquetaram as peças e ainda ajudaram a embalar. Profissionais de verdade!',
  },
  {
    initials: 'APS',
    name: 'Ana Paula Santos',
    location: 'Jales - SP',
    text: 'Minha cômoda estava com gavetas travando. Vieram no mesmo dia que liguei e resolveram rapidinho. Preço justo e serviço de qualidade!',
  },
  {
    initials: 'RM',
    name: 'Roberto Mendes',
    location: 'Valentim Gentil - SP',
    text: 'Excelente atendimento! Montaram a cama box do meu filho e ainda ajustaram uns problemas que tinha na mesa de estudos. Muito atenciosos!',
  },
  {
    initials: 'LR',
    name: 'Luciana Rodrigues',
    location: 'Votuporanga - SP',
    text: 'Serviço rápido e eficiente. Montaram toda a mobília da cozinha em um dia. Chegaram no horário e respeitaram todos os cuidados.',
  },
  {
    initials: 'CE',
    name: 'Carlos Eduardo',
    location: 'Fernandópolis - SP',
    text: 'Já é a terceira vez que uso o serviço. Sempre pontuais, organizados e com preço honesto. Podem confiar de olhos fechados!',
  },
];

const HeroSection = memo(() => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    'https://wa.me/5517981829653?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20este%20servi%C3%A7o%20e%20aplicar%20meus%2015%25%20de%20desconto.%20Seguem%20o%20modelo%20e%20a%20foto%20do%20m%C3%B3vel%20abaixo.';

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col bg-espresso">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,hsl(38_72%_42%/0.18),transparent_60%)]" />
      {/* Top banner full width */}
      <div className="bg-dourado text-on-light flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base text-left font-medium">
        <Clock className="h-5 w-5 flex-shrink-0" />
        <span className="text-xs">Agenda aberta hoje — Fernandópolis, Jales, Votuporanga, Valentim Gentil e Região Noroeste Paulista.</span>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
        <div className="w-full max-w-3xl mx-auto space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-dourado/15 text-dourado border border-dourado/30">
                Certificado Senai
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <Star className="h-3.5 w-3.5 fill-emerald-300" /> 5.0 — 297+ avaliações
              </span>
              <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-creme/10 text-creme border border-creme/20">
                15+ anos de experiência
              </span>
            </div>

            {/* Headline */}
            <h1
              id="titulo-dinamico"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-creme"
            >
              Montador de Móveis em{' '}
              <span className="text-dourado">Fernandópolis</span>, Jales, Votuporanga, Valentim Gentil e Região Noroeste Paulista
            </h1>

            {/* Subtitle */}
            <p
              id="subtitulo-dinamico"
              className="text-base sm:text-lg text-on-dark-muted leading-relaxed"
            >
              Realizamos Montagem, desmontagem e reparo com{' '}
              <strong className="text-creme font-semibold">garantia no serviço de até 30 dias</strong>.
              Parcelamos em até <strong className="text-creme font-semibold">12x no cartão de crédito</strong>. Aceitamos PIX, débito e dinheiro físico.
            </p>

            {/* CTA */}
            <div className="space-y-2">
              <a
                id="cta-dinamico"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="WhatBl w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold py-4 px-6 text-base sm:text-lg transition-all duration-300 hover:scale-[1.02] no-underline min-h-[56px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label="Solicitar orçamento grátis via WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-5 w-5 transition-transform ${isHovered ? 'scale-110' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/>
                </svg>
                <span>Orçamento Grátis pelo WhatsApp</span>
              </a>
              <p className="text-center text-sm font-medium text-on-dark-muted">
                Respondemos em até 10 minutos · Atendemos hoje
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: '1900+', label: 'Clientes atendidos' },
                { value: '100%', label: 'Satisfação garantida' },
                { value: '24h', label: 'Agendamento rápido' },
                { value: '4', label: 'Cidades atendidas' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-nogueira border border-mogno/40 p-4 sm:p-5"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-dourado">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-on-dark-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonials Carousel */}
            <div>
              <Carousel opts={{ align: 'start', loop: true, dragFree: true }} className="w-full">
                <CarouselContent className="-ml-3">
                  {heroTestimonials.map((t) => (
                    <CarouselItem key={t.name} className="pl-3 basis-[90%] sm:basis-[70%] max-w-[340px]">
                      <div className="rounded-xl bg-nogueira border border-mogno/40 p-4 sm:p-5 flex gap-4 h-full">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dourado text-on-light flex items-center justify-center font-bold text-sm">
                          {t.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex gap-0.5 text-dourado mb-1" aria-label="5 estrelas">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-dourado" />
                            ))}
                          </div>
                          <p className="text-sm sm:text-base text-creme italic">
                            "{t.text}"
                          </p>
                          <p className="text-xs sm:text-sm text-on-dark-muted mt-1">
                            {t.name} — {t.location}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <p className="text-center text-xs text-on-dark-muted mt-2">
                ← Arraste para ver mais depoimentos →
              </p>
            </div>

            {/* Cities footer */}
            <p className="text-sm sm:text-base text-on-dark-muted text-center sm:text-left">
              <span className="text-creme font-medium">Atendemos:</span>{' '}
              <span className="text-dourado font-medium">
                Fernandópolis · Jales · Votuporanga · Valentim Gentil · Região Noroeste Paulista
              </span>
            </p>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
