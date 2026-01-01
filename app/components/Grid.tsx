import GridCard from "./GridCard";
import { gridData } from "@/app/data/gridData"; // make sure path is correct

export default function Grid() {
  return (
    <div
      className="
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        auto-rows-auto
      "
    >
      {gridData.map((item) => (
        <div
          key={item.id}
          className={`
          `}
        >
          <GridCard title={item.title} image={item.image} />
        </div>
      ))}
    </div>
  );
}
