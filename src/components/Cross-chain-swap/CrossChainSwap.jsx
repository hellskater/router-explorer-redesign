import React from "react";
import { useGetMetaData } from "../../hooks/useGetData";
import StatCard from "../StatCard/StatCard";

const CrossChainSwap = () => {
  const { data, isLoading, isSuccess } = useGetMetaData();

  return (
    <div className="min-h-screen h-full bg-transparent mt-44 p-10 flex flex-col items-center text-white">
      {/* Meta data cards */}
      <section className="flex flex-wrap justify-around items-center w-full">
        {isSuccess &&
          !isLoading &&
          data.map(({ label, value }) => (
            <StatCard key={label} label={label} value={value} />
          ))}
      </section>
    </div>
  );
};

export default CrossChainSwap;
