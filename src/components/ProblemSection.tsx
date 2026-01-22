import { Shuffle, HelpCircle, Target, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: Shuffle,
    text: 'Tenho dinheiro espalhado',
  },
  {
    icon: HelpCircle,
    text: 'Invisto, mas não sei se está certo',
  },
  {
    icon: Target,
    text: 'Compro ativos sem um plano claro',
  },
  {
    icon: TrendingDown,
    text: 'Reajo ao mercado em vez de seguir um método',
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sua carteira não precisa ser complicada.{' '}
            <span className="text-primary">Só precisa fazer sentido.</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-foreground font-medium text-lg">
                "{problem.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
