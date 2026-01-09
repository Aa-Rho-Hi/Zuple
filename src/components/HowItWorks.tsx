import { Sparkles, MessageSquare, Gift } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Sparkles,
      title: 'Discover',
      description: 'Explore carefully curated emerging brands across interesting categories',
    },
    {
      icon: MessageSquare,
      title: 'Support',
      description: 'Share your opinion to help brands improve, launch better, and grow smarter.',
    },
    {
      icon: Gift,
      title: 'Unlock',
      description: 'Get early access and insider perks from brands.',
    },
  ];

  return (
    <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="text-center space-y-5 group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary group-hover:bg-secondary/70 transition-colors">
                <Icon className="w-9 h-9" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="leading-relaxed opacity-75 text-lg">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
