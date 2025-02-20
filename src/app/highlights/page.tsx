import TimeLine from "@/components/highlights";
import React from "react";

const Timeline = () => {
  return (
    <div className="px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]">
      <main className="min-h-screen max-w-screen">
        <div className="pt-24 flex flex-col items-cen mx-auto">
          <p className="max-w-xl text-center md:w-[70%] mx-auto text-sm md:text-base lg:text-xl mb-2 px-2">
            Here is the highlights of my little journey. You can always find more information on LinkedIn.
          </p>
          <div className="mt-10 md:ml-12 lg:ml-12">
            <TimeLine />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;
