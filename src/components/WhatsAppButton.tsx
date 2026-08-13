import { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero-section');
    if (!hero) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -80% 0px' }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const whatsappUrl =
    'https://wa.me/5517981829653?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20este%20servi%C3%A7o%20e%20aplicar%20meus%2015%25%20de%20desconto.%20Seguem%20o%20modelo%20e%20a%20foto%20do%20m%C3%B3vel%20abaixo.';

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pt-2 pb-3 transition-transform duration-300 ease-out pointer-events-none ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
      aria-hidden={!isVisible}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isVisible ? 0 : -1}
        className="WhatBl pointer-events-auto mx-auto flex max-w-md items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base sm:text-lg h-14 px-6 shadow-[0_-4px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] no-underline"
        aria-label="Solicitar orçamento grátis via WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
        </svg>
        <span>Orçamento Grátis no WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
