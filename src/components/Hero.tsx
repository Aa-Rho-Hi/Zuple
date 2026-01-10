export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="px-6 pt-16 pb-10 md:pt-28 md:pb-20 max-w-4xl mx-auto text-center">
      <div className="space-y-6">
        <div className="text-xs tracking-[0.3em] opacity-60 uppercase">
          ZUPLE
        </div>

        <h1 className="text-4xl md:text-7xl leading-[1.1] tracking-tight font-bold">
          Discover great brands.
          <br />
          Unlock{' '}
          <span className="text-primary">insider perks</span>
          <br />
          along the way.
        </h1>

        <p className="text-base md:text-xl leading-relaxed opacity-80 max-w-2xl mx-auto">
          A curated space to find new and emerging Indian brands before they go
          mainstream.
        </p>

        <button
          onClick={scrollToWaitlist}
          className="mt-6 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all text-base font-semibold"
        >
          Join the waitlist
        </button>
      </div>
    </section>
  );
}
