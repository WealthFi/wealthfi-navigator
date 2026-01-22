import { Shield, Scale, Rocket } from 'lucide-react';

const models = [
  {
    id: 'conservative',
    icon: Shield,
    title: 'Conservador',
    emoji: '🟢',
    color: 'conservative',
    allocations: [
      { label: 'Renda fixa Brasil', value: '60%' },
      { label: 'ETFs globais', value: '30%' },
      { label: 'Cripto', value: '5%' },
      { label: 'Reserva', value: '5%' },
    ],
    objective: 'Preservar capital com crescimento moderado',
  },
  {
    id: 'moderate',
    icon: Scale,
    title: 'Moderado',
    emoji: '🟡',
    color: 'moderate',
    allocations: [
      { label: 'Renda fixa Brasil', value: '35%' },
      { label: 'ETFs globais', value: '45%' },
      { label: 'Cripto', value: '15%' },
      { label: 'Reserva', value: '5%' },
    ],
    objective: 'Crescer com equilíbrio',
  },
  {
    id: 'aggressive',
    icon: Rocket,
    title: 'Arrojado',
    emoji: '🔴',
    color: 'aggressive',
    allocations: [
      { label: 'Renda fixa Brasil', value: '20%' },
      { label: 'ETFs globais', value: '50%' },
      { label: 'Cripto', value: '25%' },
      { label: 'Reserva', value: '5%' },
    ],
    objective: 'Maximizar crescimento no longo prazo',
  },
];

const PortfolioModelsSection = () => {
  return (
    <section id="modelos" className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Modelos de carteira{' '}
            <span className="text-primary">claros, didáticos e realistas</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {models.map((model) => (
            <div
              key={model.id}
              className="bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Header */}
              <div className={`p-6 border-b border-border bg-${model.color}/5`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{model.emoji}</span>
                  <h3 className="text-2xl font-bold">{model.title}</h3>
                </div>
              </div>
              
              {/* Allocations */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {model.allocations.map((allocation, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{allocation.label}</span>
                      <span className="font-semibold text-foreground">{allocation.value}</span>
                    </div>
                  ))}
                </div>
                
                {/* Objective */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Objetivo: </span>
                    {model.objective}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Disclaimer */}
        <p className="text-center text-muted-foreground">
          Os modelos são educativos. O perfil não é um rótulo fixo.
        </p>
      </div>
    </section>
  );
};

export default PortfolioModelsSection;
