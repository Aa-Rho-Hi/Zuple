import Phone1 from '../assets/Phone1.png';


export function Showcase() {
  return (
<section className="relative w-full overflow-hidden mt-12 md:mt-20 pt-6">
  <div className="flex justify-center">
  <img
    src={Phone1}
    alt="Zuple App"
    className="
      w-[85vw]
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
