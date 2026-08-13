const steps = [
  {
    title: 'Envie fotos pelo WhatsApp',
    description: (
      <>
        Fotografe o móvel e a caixa (se tiver) ou passe o nome do modelo. Receba o orçamento em até{' '}
        <span className="text-dourado font-medium">10 minutos</span>, sem compromisso.
      </>
    ),
  },
  {
    title: 'Orçamento rápido e transparente',
    description: (
      <>
        Preço fixo, sem surpresas. Confirmado o serviço, agendamos o horário que melhor{' '}
        <span className="text-dourado font-medium">funciona</span> para você.
      </>
    ),
  },
  {
    title: 'Problema resolvido com garantia',
    description: (
      <>
        Chegamos no horário, executamos o serviço com{' '}
        <span className="text-dourado font-medium">qualidade</span> e saímos somente após sua aprovação.
      </>
    ),
  },
];

const whatsappUrl =
  'https://wa.me/5517981829653?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20este%20servi%C3%A7o%20e%20aplicar%20meus%2015%25%20de%20desconto.%20Seguem%20o%20modelo%20e%20a%20foto%20do%20m%C3%B3vel%20abaixo.';

const HowItWorksSection = () => {
  return (
    <section className="bg-creme">
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-dourado/30 to-transparent" />
      {/* Promo banner */}
      <div className="relative border-y border-green-700/30 bg-[radial-gradient(ellipse_at_top,hsl(142_50%_25%/0.95),hsl(142_55%_18%)_70%)] px-4 py-10 sm:py-12">
        <div className="container mx-auto max-w-2xl text-center space-y-4">
          <h3 className="text-green-200 font-bold text-lg sm:text-xl">
            Últimas vagas desta semana!
          </h3>
          <p className="text-green-100/80 text-sm sm:text-base">
            Agende agora e ganhe desconto especial
          </p>
          <div className="flex justify-center pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="WhatBl inline-flex items-center justify-center bg-dourado text-on-light font-bold text-base sm:text-lg px-7 py-3 rounded-md shadow-lg shadow-dourado/30 hover:opacity-90 transition-opacity"
            >
              15% OFF
            </a>
          </div>
          <p className="text-green-100/70 text-xs sm:text-sm max-w-md mx-auto pt-1">
            Envie as fotos dos seus móveis pelo WhatsApp e receba seu orçamento em minutos
          </p>
        </div>
      </div>

      {/* 3 passos */}
      <div className="px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-3 mb-10">
            <p className="text-mogno text-xs font-bold uppercase tracking-widest">
              Como Funciona
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-espresso leading-tight">
              Simples assim — 3 passos
            </h2>
            <p className="text-on-light-muted text-sm sm:text-base">
              Do contato até o móvel pronto, sem dor de cabeça
            </p>
          </div>

          <ol className="relative space-y-8">
            {steps.map((step, i) => (
              <li key={i} className="relative pl-16">
                <div className="absolute left-0 top-0 flex flex-col items-center h-full">
                  <div className="w-11 h-11 rounded-full bg-dourado text-on-light flex items-center justify-center font-bold text-lg shadow-lg shadow-dourado/30 z-10">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px bg-mogno/30 mt-2 mb-[-2rem]" />
                  )}
                </div>
                <h3 className="font-display text-espresso font-bold text-lg sm:text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-on-light-muted text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
