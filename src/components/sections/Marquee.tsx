import { marqueeText } from '@/data/brand';

export default function Marquee() {
  const items = [...marqueeText, ...marqueeText, ...marqueeText, ...marqueeText];

  return (
    <div className="relative overflow-hidden border-y border-espresso/10 bg-cream py-6">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {items.map((text, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-3xl italic text-espresso/80 lg:text-4xl">
              {text}
            </span>
            <span className="text-terracotta text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
