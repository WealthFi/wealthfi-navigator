import { MessageCircle } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="bg-gradient-to-br from-primary/10 via-accent to-primary/5 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Organize sua vida financeira sem hype, sem pressa e sem improviso.
          </h2>
          
          <div className="mt-10">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-10 py-5"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com o WealthFi no WhatsApp
            </a>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>✓ Gratuito</span>
              <span>✓ Sem compromisso</span>
              <span>✓ Menos de 2 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
