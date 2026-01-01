import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function GridCard({ title, image, description }: Props) {
  return (
    <div className="group relative w-full rounded-xl cursor-pointer ">
      <div className="relative w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} – ${description}`}
          width={800}
          height={500}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

      <div className="absolute top-6 left-6 right-20 opacity-0 group-hover:opacity-100 transition text-white flex flex-col gap-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-white/90">{description}</p>
      </div>

      <div className="absolute -top-2 -right-2 z-20 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white">
            <ArrowUpRight size={18} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
