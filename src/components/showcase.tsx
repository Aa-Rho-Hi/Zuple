import Phone1 from '../assets/Phone1.png';

export function Showcase() {
  return (
    <section className="w-full overflow-hidden bg-background pt-6 pb-0">
      <div className="flex justify-center">
        <img
          src={Phone1}
          alt="Zuple App"
          className="
            w-[82vw]
            max-w-[320px]
            md:max-w-[380px]
            lg:max-w-[420px]
            h-auto
          "
        />
      </div>
    </section>
  );
}
