import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-large">Not sure where to go?</p>

        <button className="rounded-full px-10 py-4 text-purple-500 bg-white font-bold shadow-md  mt-4 hover:shadow-xl active:scale-90 transition duration-150 ease-in">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
