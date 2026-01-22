import { Clock, Shield, BookOpen, FileText } from 'lucide-react';

const trustPoints = [
  {
    icon: Clock,
    text: 'Estratégia de longo prazo',
  },
  {
    icon: Shield,
    text: 'Sem conflito com corretoras',
  },
  {
    icon: BookOpen,
    text: 'Educacional e orientativo',
  },
  {
    icon: FileText,
    text: 'Material não constitui recomendação individual',
  },
];

const TrustSection = () => {
  return (
    <section className="section-padding-sm">
      <div className="container-narrow">
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{point.text}</span>
              </div>
            ))}
          </div>
          
          {/* Country badges */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xl">🇧🇷</span>
              <span className="text-sm">Brasil</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xl">🌍</span>
              <span className="text-sm">Global</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xl">💬</span>
              <span className="text-sm">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
