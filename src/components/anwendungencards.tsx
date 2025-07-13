import Image from "next/image";
import Link from "next/link";
import { Factory, PackageCheck, Mountain, Flame, Soup, Truck, LucideIcon } from "lucide-react";

type Anwendung = {
  slug: string;
  title: string;
  image: string;
  icon: LucideIcon;
};

const anwendungen: Anwendung[] = [
  {
    slug: "papierindustrie",
    title: "Papierindustrie",
    image: "/images/anwendungen1.jpg",
    icon: Factory,
  },
  {
    slug: "kraftwerke",
    title: "Kraftwerke",
    image: "/images/anwendungen2.jpg",
    icon: Flame,
  },
  {
    slug: "bergbauindustrie",
    title: "Bergbauindustrie",
    image: "/images/anwendungen3.jpg",
    icon: Mountain,
  },
  {
    slug: "lebensmittelindustrie",
    title: "Lebensmittelindustrie",
    image: "/images/anwendungen5.jpg",
    icon: Soup,
  },
  {
    slug: "logistikbranche",
    title: "Logistikbranche",
    image: "/images/anwendungen6.jpg",
    icon: Truck,
  },
  {
    slug: "verpackungsindustrie",
    title: "Verpackungsindustrie",
    image: "/images/anwendungen7.jpg",
    icon: PackageCheck,
  },
];

export default function AnwendungenCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {anwendungen.map(({ slug, title, image, icon: Icon }, i) => (
          <Link
            href={`/anwendungen/${slug}`}
            key={slug}
            className="relative h-56 rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-200"
            style={{
              minHeight: "220px",
            }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={i < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent group-hover:bg-white/60 transition-all duration-300" />
            <div className="absolute left-0 bottom-0 p-5 flex flex-col gap-2 z-10">
              <Icon size={38} className="text-black mb-1" />
              <span className="text-black font-bold text-lg sm:text-xl leading-snug">
                {title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
