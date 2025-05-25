import React from "react";
import { MemoryCarousel } from "./MemoryCarousel";
import { SignInCard } from "./SigninCard";

const MemoriesSection: React.FC = () => {
  return (
    <section className="block  px-4 py-6 space-y-6">
      <div>
        <h2 className=" text-[#333333] text-base font-medium">
          View the public memories linked to this Resurge piece.
        </h2>
      </div>

      <MemoryCarousel />

      <SignInCard />
    </section>
  );
};

export default MemoriesSection;
