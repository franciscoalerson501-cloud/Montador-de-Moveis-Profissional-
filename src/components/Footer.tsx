const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-espresso text-creme py-8 sm:py-12 px-4 border-t border-dourado/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Empresa */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-dourado">
              Montagem Expert
            </h3>
            <p className="text-on-dark-muted text-xs sm:text-sm leading-relaxed">
              Especialistas em montagem, desmontagem e conserto de móveis. 
              Atendemos Votuporanga, Fernandópolis, Jales, Valentim Gentil e região 
              com qualidade e garantia.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-xs">
              <span className="px-2 sm:px-3 py-1 bg-dourado/20 rounded-full text-dourado text-center">3900+ Móveis Montados</span>
              <span className="px-2 sm:px-3 py-1 bg-success/20 rounded-full text-success text-center">
                100% Satisfação
              </span>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-display font-semibold text-dourado text-sm sm:text-base">Nossos Serviços</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-on-dark-muted">
              <li>• Montagem de Móveis</li>
              <li>• Desmontagem de Móveis</li>
              <li>• Consertos e Reparos de Móveis </li>
              <li>• Ajustes e Manutenção</li>
            </ul>
          </div>

          {/* Regiões */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-display font-semibold text-dourado text-sm sm:text-base">Regiões Atendidas</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-on-dark-muted">
              <li>📍 Votuporanga e bairros</li>
              <li>📍 Fernandópolis</li>
              <li>📍 Jales</li>
              <li>📍 Valentim Gentil</li>
              <li>📍 Cidades próximas</li>
            </ul>
          </div>
        </div>

        {/* Contato */}
        <div className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t border-mogno/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 text-xs text-on-dark-muted">
              <span>📱 WhatsApp: (17) 981829653</span>
              <span>📞 Telefone: (17) 981829653</span>
              <span>🕒 Atendimento: 7h às 18h</span>
            </div>
            
            <div className="text-xs text-on-dark-muted/70">
              © {currentYear} Montagem Expert. Todos os direitos reservados.
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-mogno/40 text-xs text-on-dark-muted/70 text-center">
          <p>Atendimento especializado para região noroeste paulista. Orçamentos gratuitos e sem compromisso. Garantia de até 30 dias na montagem de móveis, desmontagem de móveis e consertos de móveis. Profissionais experientes e ferramentas adequadas.</p>
          <p className="mt-3">
            Termos de uso - Política de privacidade
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
