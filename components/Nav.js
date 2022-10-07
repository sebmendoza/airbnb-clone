import Image from "next/image";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange, DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Nav({ placeHolder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numofGuests, setNumofGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    // we use router .push so we can pass query params. This is better for sending your search results to a friend.
    // Can't do this with Redux
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numofGuests: numofGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeHolder || "Start your search"}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          {/* using this component from the library, it requires configs */}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserCircleIcon className="h-5" />
            <input
              type="number"
              value={numofGuests}
              onChange={(e) => setNumofGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            ></input>
          </div>
          <div className="flex ">
            <button className="flex-grow text-gray-400" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
