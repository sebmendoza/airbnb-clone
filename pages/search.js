import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  //   console.log({ searchResults });
  //   console.log(router.query)   gives an object
  const { location, startDate, endDate, numofGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <div>
      <Nav placeHolder={`${location} | ${range} | ${numofGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p>
            300+ Rooms for {numofGuests} Guests from {range}
          </p>

          <h1 className="text-3xl font-semibol mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:flex mb-5 space-x-3 text-gray-500 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  key={img}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

//https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

export async function getServerSideProps() {
  // https://links.papareact.com/isz
  // https://www.jsonkeeper.com/b/5NPS

  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
