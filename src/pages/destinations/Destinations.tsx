import { useState } from "react";
import "./destinations.scss";
import { destinations } from "../../data";
import { Link } from "react-router-dom";

const Destinations = () => {
  // State variables
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(3);
  const [filter, setFilter] = useState(destinations);

  // Function to show more destinations when the button is clicked
  const showMore = () => {
    setLoad((previousValue) => previousValue + 3);
  };

  // Function to filter destinations based on the selected continent
  const filterDestinations = (destItem: string): void => {
    // Create an array to store the filtered results
    const results = destinations.filter(
      // Use the Array.filter() method to iterate through the 'destinations' array and filter the destinations based on the selected continent
      (destination) => destination.continent === destItem
    );

    // Set the filtered results using the 'setFilter' function
    setFilter(results);
  };

  return (
    <div className="destinations">
      <div className="destinations__top">
        <div className="top__left">
          <h2 className="destinations__headline">Destinations</h2>
          <p className="destinations__text">
            Here at <i>viajar</i> we set about to equip the savvy traveller find
            all they need to know to plan their next trip and provide them with
            better booking options. With our mix of locals' knowledge, select
            destination partners and the latest web-technology, we keep right
            up-to-date with all the latest news, weather, events and offers...
            our detailed destination guides mean you'll never be short of things
            to see, places to stay, or unique experiences to try.
          </p>
        </div>
        <div className="top__right">
          <img src="./assets/worldgif.gif" alt="world-map"></img>
        </div>
      </div>
      <div className="destinations__filter">
        <h4>Where do you want to go:</h4>
        <div>
          <button onClick={() => setFilter(destinations)}>All</button>
          <button onClick={() => filterDestinations("Africa")}>Africa</button>
          <button onClick={() => filterDestinations("America")}>America</button>
          <button onClick={() => filterDestinations("Asia")}>Asia</button>
          <button onClick={() => filterDestinations("Antartic")}>
            Antartic
          </button>
          <button onClick={() => filterDestinations("Europe")}>Europe</button>
        </div>
      </div>
      <div className="destinations__searchBox">
        <input
          type="search"
          placeholder="Type to search..."
          className="destinations__search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="destinations__wrapper">
        {filter.length > 0 ? (
          filter
            .filter((destination) =>
              destination.place.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, load)
            .map((destination) => (
              <Link
                to={`/destinations/${destination.id}`}
                className="destinations__box"
                key={destination.id}
              >
                <img src={destination.img[0]} alt={destination.place} />
                <div className="destinations__info">
                  <h2 className="destinations__place">{destination.place}</h2>
                </div>
              </Link>
            ))
        ) : (
          <p>No destinations matching the selected continent.</p>
        )}
      </div>
      <div className="destinations__buttonBox">
        <button onClick={showMore} className="destinations__button">
          More destinations
        </button>
      </div>
    </div>
  );
};

export default Destinations;
