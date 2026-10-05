import Image from "next/image";

export function InternalHero({ eyebrow, title, intro, image, imageAlt, imagePosition }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string; imagePosition?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#17120F] text-white">
      {image && <Image src={image} alt={imageAlt ?? ""} fill priority sizes="100vw" className="object-cover opacity-30" style={{ objectPosition: imagePosition }} />}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17120F] via-[#17120F]/85 to-[#17120F]/30" />
      <div className="page-shell relative py-20 sm:py-28">
        <p className="eyebrow text-[#F2C36F]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.035em] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">{intro}</p>
      </div>
    </section>
  );
}
