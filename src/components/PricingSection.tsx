import { Grid2x2, AlignJustify, Wrench } from 'lucide-react';

const services = [
  {
    icon: Grid2x2,
    title: 'Montagem de Móveis',
    description:
      'Montagem profissional de qualquer móvel: guarda-roupas, estantes, camas, mesas, sofás e mais. Peças organizadas, parafusos corretos, acabamento impecável.',
    price: 'R$ 59,47',
    note: 'por móvel · 30 dias de garantia',
    popular: true,
  },
  {
    icon: AlignJustify,
    title: 'Desmontagem de Móveis Segura',
    description:
      'Desmontagem de Móveis cuidadosa para mudanças, troca de lugar no mesmo ambiente ou mudança de imóvel. Peças organizadas e identificadas, com todo cuidado para evitar arranhões e garantir a segurança dos móveis.',
    price: 'R$ 47,99',
    note: 'por móvel · com embalagem',
  },
  {
    icon: Wrench,
    title: 'Consertos e Reparos de Móveis',
    description:
      'Gaveta travada, porta torta, dobradiça quebrada, parafuso solto? Resolvo qualquer problema em móveis, reparos com garantia no serviço.',
    price: 'R$ 39,00',
    note: 'por reparo · diagnóstico grátis',
  },
];

const whatsappUrl =
  'https://wa.me/5517981829653?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20este%20servi%C3%A7o%20e%20aplicar%20meus%2015%25%20de%20desconto.%20Seguem%20o%20modelo%20e%20a%20foto%20do%20m%C3%B3vel%20abaixo.';

const PricingSection = () => {
  return (
    <section className="bg-nogueira px-4 py-12 sm:py-16">
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-dourado/30 to-transparent mb-12" />
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-3 mb-8">
          <p className="text-dourado text-xs font-bold uppercase tracking-widest">
            Serviços e Preços
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-creme leading-tight">
            Transparência em tudo
          </h2>
          <p className="text-on-dark-muted text-sm sm:text-base">
            Preços fixos, sem cobranças surpresa
          </p>
        </div>

        <div className="space-y-5">
          {services.map((s, i) => (
            <article
              key={i}
              className={`rounded-2xl border bg-espresso p-5 sm:p-6 ${
                s.popular ? 'border-dourado border-l-4' : 'border-mogno/40'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-dourado/15 text-dourado">
                  <s.icon className="w-5 h-5" />
                </div>
                {s.popular && (
                  <span className="px-2 py-1 rounded-full bg-dourado text-on-light text-xs font-bold uppercase tracking-wider">
                    Mais popular
                  </span>
                )}
              </div>
              <h3 className="font-display text-creme font-bold text-lg sm:text-xl mb-2">
                {s.title}
              </h3>
              <p className="text-on-dark-muted text-sm sm:text-base leading-relaxed">
                {s.description}
              </p>

              <div className="border-t border-mogno/30 my-5" />

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-on-dark-muted text-xs sm:text-sm">A partir de</p>
                  <p className="font-display text-dourado font-bold text-2xl sm:text-3xl leading-tight">
                    {s.price}
                  </p>
                  <p className="text-on-dark-muted/80 text-xs sm:text-sm mt-1">{s.note}</p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="WhatBl inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-lg shadow-lg shadow-green-500/20 transition-colors whitespace-nowrap"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
