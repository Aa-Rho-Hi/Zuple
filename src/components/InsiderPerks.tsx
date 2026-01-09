import cashbackImg from 'figma:asset/c1b57632edc33475c3376cc9890a65c6c7ae34f4.png';
import giftCardsImg from 'figma:asset/07cafc8ee57a7295dbfcc994691af06523b57a67.png';
import loyaltyImg from 'figma:asset/e774a0bfc6804fdad42d072da4da4885c0bfbd0e.png';

export function InsiderPerks() {
  const perks = [
    {
      image: cashbackImg,
      title: 'Cashback',
      description: 'Try and earn. turn buying into earning',
    },
    {
      image: giftCardsImg,
      title: 'Gift Cards',
      description: 'Best gift cards compared to other marketplaces - hands down',
    },
    {
      image: loyaltyImg,
      title: 'Loyalty programs',
      description: 'Skip the points. real currency, true loyalty',
    },
  ];

  return (
    <section className="px-6 py-20 md:py-28 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight font-bold">
          Insider Perks
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {perks.map((perk, index) => (
            <div key={index} className="text-center space-y-6 group cursor-pointer">
              <div className="flex justify-center">
                <div className="w-48 h-48 flex items-center justify-center rounded-3xl bg-secondary/60 group-hover:bg-secondary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out">
                  <img 
                    src={perk.image} 
                    alt={perk.title} 
                    className="w-full h-full object-contain mix-blend-multiply p-4"
                  />
                </div>
              </div>
              <div className="space-y-3 group-hover:translate-y-1 transition-transform duration-300">
                <h3 className="text-2xl font-bold">{perk.title}</h3>
                <p className="leading-relaxed opacity-75 text-lg">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}