
import { MessageSquare } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const whatsappUrl = 'https://wa.me/5517981829653?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20este%20servi%C3%A7o%20e%20aplicar%20meus%2015%25%20de%20desconto.%20Seguem%20o%20modelo%20e%20a%20foto%20do%20m%C3%B3vel%20abaixo.';

  const faqs = [
    {
      question: "Quanto tempo leva para o atendimento?",
      answer: "Respondemos em até 10 minutos no WhatsApp e agendamos conforme sua disponibilidade."
    },
    {
      question: "Atendem quais cidades mesmo?",
      answer: "Atendemos Fernandópolis, Jales, Votuporanga, Valentim Gentil e toda a Região Noroeste Paulista."
    },
    {
      question: "Oferecem garantia nos serviços?",
      answer: "Sim! Oferecemos garantia de até 30 dias em todos os nossos serviços de montagem."
    },
    {
      question: "Posso agendar para o mesmo dia?",
      answer: "Dependendo da disponibilidade, sim! Entre em contato para verificar os horários disponíveis."
    },
    {
      question: "Qual o horário de atendimento?",
      answer: "Atendemos de segunda a sábado, das 7h às 18h. WhatsApp disponível 24h para agendamentos."
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 bg-linho">
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-dourado/30 to-transparent absolute top-0 left-0" />
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-up space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="font-display responsive-heading font-bold text-espresso">
              Perguntas <span className="text-dourado">Frequentes</span>
            </h2>
            <p className="responsive-text text-on-light-muted max-w-2xl mx-auto">
              Tire suas dúvidas sobre montagem, desmontagem e reparo de móveis em Fernandópolis, Jales, Votuporanga, Valentim Gentil e Região Noroeste Paulista
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-mogno/20 rounded-xl bg-white px-6 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-dourado/10"
                >
                  <AccordionTrigger className="text-left font-semibold text-sm sm:text-base text-espresso hover:no-underline hover:text-dourado transition-colors duration-300 [&[data-state=open]>svg]:rotate-180 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 space-y-4 animate-[accordion-down_0.8s_ease-out] data-[state=closed]:animate-[accordion-up_0.8s_ease-out]">
                    <p className="text-on-light-muted text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="WhatBl bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm no-underline"
                      aria-label="Falar conosco no WhatsApp"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Fale Conosco no WhatsApp
                    </a>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
