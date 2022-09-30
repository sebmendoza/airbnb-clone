import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="hover:cursor-pointer hover:scale-105 tranform transition duration-300 ease-out">
      {/* // remember to use relative for layout to work properly */}
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
