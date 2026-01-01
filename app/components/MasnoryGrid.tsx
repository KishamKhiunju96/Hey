// src/components/MasonryGrid.tsx
"use client";

import { Masonry } from "masonic";
import GridCard from "./GridCard";
import { gridData } from "../data/gridData";

const MasonryGrid = () => {
  return (
    <Masonry
      items={gridData}
      columnWidth={260}
      columnGutter={16}
      overscanBy={2}
      render={({ data }) => (
        <GridCard
          title={data.title}
          description={data.description}
          image={data.image}
        />
      )}
    />
  );
};
export default MasonryGrid;
