import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 hover:bg-gray-100 transition transform duration-200 ease-out">
      {/* Left */}
      {/* the filled layout for image will fill the whole screen. Make parent relative and give div a height/width to fix*/}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
