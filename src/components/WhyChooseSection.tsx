const features = [
  {
    emoji: '🏅',
    title: 'Certificado Senai',
    description: 'Formação técnica especializada em montagem de móveis',
  },
  {
    emoji: '✅',
    title: 'Garantia no serviço',
    description: '30 dias de garantia em todo serviço executado',
  },
  {
    emoji: '⏱️',
    title: 'Pontualidade',
    description: 'Respeitamos seu tempo. Chegamos no horário combinado',
  },
  {
    emoji: '💬',
    title: 'Suporte rápido',
    description: 'Orçamento em 10 minutos. Atendimento ágil pelo WhatsApp',
  },
  {
    emoji: '🧹',
    title: 'Ambiente limpo',
    description: 'Deixamos o local organizado após o serviço, sem resíduos',
  },
  {
    emoji: '💳',
    title: 'Parcelamos em 12x',
    description: 'Cartão de crédito, PIX ou dinheiro. Você escolhe',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--mogno)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--mogno)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-dourado/30 to-transparent absolute top-0 left-0" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="mb-12 sm:mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-mogno mb-4">
            Por que nos escolher
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
            Comprometimento em{' '}<br />cada detalhe
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-creme border border-mogno/20 rounded-2xl p-6 sm:p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-5">{f.emoji}</div>
              <h3 className="font-display text-base sm:text-xl font-bold text-espresso mb-2 sm:mb-3">{f.title}</h3>
              <p className="text-sm sm:text-base text-on-light-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
