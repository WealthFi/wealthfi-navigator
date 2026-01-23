import { MessageCircle, ArrowDown } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-background" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Organização financeira para investir no longo prazo.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-delay-1">
              Estruture sua carteira com renda fixa no Brasil, ETFs globais e cripto — 
              tudo no lugar certo, com método e disciplina.
            </p>
            
            <p className="text-base text-muted-foreground mb-8 animate-fade-in-delay-2">
              O WealthFi é um assistente inteligente que ajuda você a organizar, 
              acompanhar e manter uma carteira de investimentos alinhada ao seu perfil.
            </p>
            
            <div className="animate-fade-in-delay-3">
              <a
                href="https://wa.me/5562994597421"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Começar pelo WhatsApp
              </a>
              <p className="text-sm text-muted-foreground mt-3">
                Leva menos de 2 minutos
              </p>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="relative animate-fade-in-delay-2 hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              <img
                src={heroIllustration}
                alt="Organização financeira ilustrada"
                className="w-full h-full object-contain rounded-2xl"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
