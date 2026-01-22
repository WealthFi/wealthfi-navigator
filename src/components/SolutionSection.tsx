import { 
  Layers, 
  Shield, 
  Globe, 
  Bitcoin, 
  RefreshCw, 
  MessageCircle 
} from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    title: 'Carteira completa',
    description: 'Não só cripto — uma estrutura diversificada',
  },
  {
    icon: Shield,
    title: 'Base segura no Brasil',
    description: 'Renda fixa como fundação sólida',
  },
  {
    icon: Globe,
    title: 'Exposição global',
    description: 'ETFs para crescimento internacional',
  },
  {
    icon: Bitcoin,
    title: 'Cripto com função clara',
    description: 'Posição definida, sem especulação',
  },
  {
    icon: RefreshCw,
    title: 'Acompanhamento contínuo',
    description: 'Disciplina ao longo do tempo',
  },
  {
    icon: MessageCircle,
    title: 'Tudo via WhatsApp',
    description: 'Simples, direto, sem complicação',
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O WealthFi existe para trazer{' '}
            <span className="text-primary">organização financeira.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Organização não é opinião.
            <br />
            É estrutura, método e disciplina aplicados ao longo do tempo.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
