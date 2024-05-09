import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow
        </h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam
          aut rerum nostrum optio, debitis quas odio adipisci vel aliquam
          repellat officiis asperiores sit eos dolor voluptas. Illum, beatae ad!
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
