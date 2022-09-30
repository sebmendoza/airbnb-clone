import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Nav() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Search */}
      <div className="flex item-center border-2 rounded-full py-2 md:border md:shadow-sm scale-75 sm:scale-105">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 cursor-pointer">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Nav;
