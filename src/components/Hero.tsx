export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative z-50 bg-background px-6 pt-20 pb-40 md:pt-28 md:pb-48 max-w-4xl mx-auto text-center">

      <div className="space-y-10">
        <div className="text-sm tracking-[0.3em] opacity-60 uppercase">
          ZUPLE
        </div>

        <h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight font-bold">
          Discover great brands.
          <br />
          Unlock <span className="text-primary">insider</span>{' '}
          <span className="text-primary">perks</span>
          <br />
          along the way.
        </h1>

        {/* 👇 THIS WAS BEING OVERLAPPED */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed opacity-80">
            A curated space to find new and emerging Indian brands before they go mainstream.
          </p>

          <p className="text-lg leading-relaxed opacity-70">
            Thoughtful and high-quality brands chosen for what they stand for, not how loudly they advertise.
          </p>

          <p className="text-lg leading-relaxed opacity-70 font-medium">
            If you care about what you use, you'll feel right at home!
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={scrollToWaitlist}
            className="px-10 py-5 bg-primary text-primary-foreground rounded-full hover:opacity-90 hover:scale-[1.02] transition-all text-lg font-semibold"
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
