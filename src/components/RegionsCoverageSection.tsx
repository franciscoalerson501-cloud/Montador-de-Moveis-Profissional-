import { MapPin } from 'lucide-react';

const regions = [
  { name: 'Fernandópolis', highlight: true },
  { name: 'Jales', highlight: true },
  { name: 'Votuporanga', highlight: true },
  { name: 'Valentim Gentil', highlight: true },
  { name: 'Região Noroeste Paulista', highlight: true },
];

const RegionsCoverageSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 bg-espresso">
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-dourado/30 to-transparent absolute top-0 left-0" />
      <div className="container mx-auto max-w-3xl">
        <div className="mb-10 sm:mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-dourado mb-4">
            Cobertura de atendimento
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-creme leading-tight mb-4">
            Regiões atendidas
          </h2>
          <p className="text-lg text-on-dark-muted">
            Levamos excelência até a sua cidade
          </p>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
          {regions.map((r, i) => (
            <div
              key={i}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border transition-colors ${
                r.highlight
                  ? 'bg-dourado/15 border-dourado/60'
                  : 'bg-nogueira border-mogno/40'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  r.highlight ? 'bg-dourado' : 'bg-mogno'
                }`}
              />
              <span className="text-creme font-medium">{r.name}</span>
            </div>
          ))}
        </div>

        <div className="bg-nogueira border border-mogno/40 rounded-2xl p-6 sm:p-8 flex gap-5">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-dourado/15 flex items-center justify-center">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-dourado" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-creme mb-3">
              Sua cidade não está na lista?
            </h3>
            <p className="text-on-dark-muted leading-relaxed">
              Atendemos também cidades vizinhas. Mande mensagem e verificamos
              disponibilidade de deslocamento para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionsCoverageSection;
