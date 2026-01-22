import { X, Check } from 'lucide-react';

const notDoList = [
  'Não indica "moeda da vez"',
  'Não manda comprar tudo agora',
  'Não promete ganhos',
  'Não tenta prever o mercado',
];

const PositioningSection = () => {
  return (
    <section id="posicionamento" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O que o WealthFi{' '}
              <span className="text-primary">não faz</span>
            </h2>
          </div>
          
          {/* What we don't do */}
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <div className="space-y-4">
              {notDoList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-destructive/5 rounded-lg border border-destructive/20"
                >
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Counterpoint */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xl font-semibold text-foreground mb-2">
                  O WealthFi é um copiloto.
                </p>
                <p className="text-lg text-muted-foreground">
                  Ele ajuda você a não se perder do plano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
