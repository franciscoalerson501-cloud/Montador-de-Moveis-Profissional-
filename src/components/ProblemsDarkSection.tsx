import { AlertTriangle, Clock, Wrench, Home, Settings, ShieldX } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Móvel Instável = Risco à Família',
    description:
      'Estantes bambas, gavetas que caem, portas que não fecham. Não coloque sua família em risco por uma montagem mal feita. Proteja quem você ama.',
  },
  {
    icon: Clock,
    title: 'Tempo Perdido = Dinheiro Jogado Fora',
    description:
      'Cada hora desperdiçada montando móveis é dinheiro que você poderia estar ganhando ou tempo com sua família. Seu tempo vale mais.',
  },
  {
    icon: Wrench,
    title: 'Erro de Montagem = Prejuízo Duplo',
    description:
      'Móvel quebrado + necessidade de contratar um montador de móveis profissional = você paga duas vezes. Evite esse prejuízo contratando desde o início.',
  },
  {
    icon: Home,
    title: 'Casa Desorganizada = Estresse Diário',
    description:
      'Móveis mal montados geram frustração constante. Sua casa deve ser um refúgio, não uma fonte de irritação diária.',
  },
  {
    icon: Settings,
    title: 'Reparo Caseiro = Problema Maior',
    description:
      'Tentar fazer o reparo de móveis sem conhecimento técnico pode causar danos irreversíveis. Um profissional resolve de uma vez por todas.',
  },
  {
    icon: ShieldX,
    title: 'Garantia Perdida por Montagem Incorreta',
    description:
      'Montagem errada pode anular a garantia do fabricante. Proteja seu investimento com montagem profissional certificada.',
  },
];

const ProblemsDarkSection = () => {
  return (
    <section className="bg-linho px-4 py-12 sm:py-16">
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-dourado/30 to-transparent mb-12" />
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-3 mb-8 sm:mb-10">
          <p className="text-mogno text-xs font-bold uppercase tracking-widest">
            Por que contratar um profissional
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-espresso leading-tight">
            Estes problemas custam caro
          </h2>
          <p className="text-on-light-muted text-sm sm:text-base">
            Confiar em amadores sai mais caro do que parece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {problems.map((p, i) => (
            <article
              key={i}
              className="rounded-2xl border border-mogno/20 bg-white p-5 sm:p-6"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-mogno/10 text-mogno mb-4">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-espresso font-bold text-base sm:text-lg mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-on-light-muted text-sm leading-relaxed">
                {p.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 rounded-2xl border border-green-700/30 bg-green-900/5 p-6 sm:p-8 text-center">
          <h3 className="font-display text-green-800 font-bold text-xl sm:text-2xl mb-3 leading-tight">
            A solução profissional custa menos que o prejuízo
          </h3>
          <p className="text-on-light-muted text-sm sm:text-base max-w-2xl mx-auto">
            Com mais de 15 anos de experiência, resolvo na primeira visita — com garantia no serviço.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsDarkSection;
