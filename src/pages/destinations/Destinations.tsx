import { useState, useEffect } from "react";
import "./destinations.scss";
import { destinations } from "../../data";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(16);
  const [filter, setFilter] = useState(destinations);
  const [activeButtonId, setActiveButtonId] = useState("all");

  const maxPrice = destinations.reduce((max, destination) => {
    return destination.price > max ? destination.price : max;
  }, 0);

  const minPrice = destinations.reduce((min, destination) => {
    return destination.price < min ? destination.price : min;
  }, Infinity); // Initialize with Infinity, so the first destination price becomes the minimum.

  // State to track min and max prices
  const [filterMaxPrice, setFilterMaxPrice] = useState(maxPrice);
  const [filterMinPrice, setFilterMinPrice] = useState(minPrice);

  // State to track current price (minimum)
  const [price, setPrice] = useState(minPrice);

  // useEffect to update the 'price' state when 'minPrice' changes
  useEffect(() => {
    setPrice(minPrice);
  }, [minPrice]);

  // Function to show more destinations when the button is clicked
  const showMore = () => {
    setLoad((previousValue) => previousValue + 16);
  };

  // when the load reaches its maximum value, the button will be disabled, and the cursor will change to "not-allowed"
  const isButtonDisabled = load >= filter.length;

  // Function to filter destinations based on the selected continent
  const filterDestinations = (destItem: string): void => {
    // Create an array to store the filtered results
    const filteredByContinent = destinations.filter(
      // Use the Array.filter() method to iterate through the 'destinations' array and filter the destinations based on the selected continent
      (destination) => destination.continent === destItem
    );

    // Set the filtered results using the 'setFilter' function
    setFilter(filteredByContinent);
  };

  // Function to filter destinations based on the selected continent
  const filterPrice = (destItem: string): void => {
    const filteredByPrice = destinations.filter(
      (destination) => destination.price <= price
    );

    setFilter(filteredByPrice);
  };

  // Function to reset all the filters selected
  const clearFilters = () => {
    setFilter(destinations);
    setPrice(minPrice);
    setSearch("");
    setActiveButtonId("all");
  };

  // Define a type for the button IDs
  type ButtonId =
    | "all"
    | "africa"
    | "america"
    | "asia"
    | "antarctica"
    | "australia"
    | "europe";

  // Function to handle button click and set the active button ID
  const handleButtonClick = (buttonId: ButtonId) => {
    setActiveButtonId(buttonId);
  };

  return (
    <div className="destinations__bg">
      <div className="destinations">
        <div className="destinations__top">
          <div className="top__left">
            <h2 className="destinations__headline">Destinations</h2>
            <img src="./assets/worldgif.gif" alt="world-map"></img>
          </div>
        </div>
        <div className="destinations__filter">
          <h4>Where do you want to go:</h4>
          <div>
            <button
              onClick={() => {
                setFilter(destinations);
                handleButtonClick("all");
              }}
              className={activeButtonId === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => {
                filterDestinations("Africa");
                handleButtonClick("africa");
              }}
              className={activeButtonId === "africa" ? "active" : ""}
            >
              Africa
            </button>
            <button
              onClick={() => {
                filterDestinations("America");
                handleButtonClick("america");
              }}
              className={activeButtonId === "america" ? "active" : ""}
            >
              America
            </button>
            <button
              onClick={() => {
                filterDestinations("Antartica");
                handleButtonClick("antarctica");
              }}
              className={activeButtonId === "antarctica" ? "active" : ""}
            >
              Antarctica
            </button>
            <button
              onClick={() => {
                filterDestinations("Asia");
                handleButtonClick("asia");
              }}
              className={activeButtonId === "asia" ? "active" : ""}
            >
              Asia
            </button>
            <button
              onClick={() => {
                filterDestinations("Australia");
                handleButtonClick("australia");
              }}
              className={activeButtonId === "australia" ? "active" : ""}
            >
              Australia
            </button>
            <button
              onClick={() => {
                filterDestinations("Europe");
                handleButtonClick("europe");
              }}
              className={activeButtonId === "europe" ? "active" : ""}
            >
              Europe
            </button>
          </div>
          <div className="destinations__priceFilter">
            <h4>Price range between:</h4>
            <input
              type="range"
              name="range"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={(e) => {
                setPrice(parseFloat(e.target.value));
                filterPrice(e.target.value);
              }}
            ></input>
            <h4>{price}€</h4>
          </div>
        </div>
        <div className="destinations__searchBox">
          <input
            type="search"
            placeholder="Type to search..."
            className="destinations__search"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            onChange={() => clearFilters()}
            onClick={clearFilters}
            className="destinations__clearFilters"
          >
            Clear filters
          </button>
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
            <p className="destinations__error">
              No destinations matching the selected continent.
            </p>
          )}
        </div>
        <div className="destinations__buttonBox">
          <button
            onClick={showMore}
            className="destinations__button"
            disabled={isButtonDisabled}
            style={{ cursor: isButtonDisabled ? "not-allowed" : "pointer" }}
          >
            More destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
