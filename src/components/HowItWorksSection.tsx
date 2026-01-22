import { AlertTriangle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Inicie a conversa',
    description: 'Você conversa com o WealthFi no WhatsApp',
  },
  {
    number: '02',
    title: 'Entenda seu perfil',
    description: 'Ele entende seu perfil, horizonte e tolerância a risco',
  },
  {
    number: '03',
    title: 'Receba um modelo',
    description: 'Apresenta um modelo de carteira simples e clara',
  },
  {
    number: '04',
    title: 'Compare sua carteira',
    description: 'Compara com sua carteira atual',
  },
  {
    number: '05',
    title: 'Ajuste gradualmente',
    description: 'Sugere ajustes graduais, sem pressa',
  },
  {
    number: '06',
    title: 'Mantenha a disciplina',
    description: 'Acompanha e reforça disciplina ao longo do tempo',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Como o WealthFi funciona na prática
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border relative overflow-hidden group"
            >
              {/* Step number background */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <span className="inline-block text-sm font-bold text-primary mb-3">
                  Passo {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Important note */}
        <div className="bg-accent/50 border border-accent-foreground/20 rounded-xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-accent-foreground" />
          </div>
          <p className="text-foreground">
            <strong>Importante:</strong> O WealthFi não executa ordens, não prevê mercado e não promete retorno.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
