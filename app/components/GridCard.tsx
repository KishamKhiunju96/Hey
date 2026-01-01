import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  image: string;
};

export default function GridCard({ title, image }: Props) {
  return (
    <div className="group relative w-full rounded-xl cursor-pointer overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
      <h2 className="absolute top-6 left-6 right-20 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
        {title}
      </h2>
      <div className=" absolute -top-4 -right-4 z-20 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800">
            <ArrowUpRight size={18} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
