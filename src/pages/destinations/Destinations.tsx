import { useState, useEffect } from "react";
import "./destinations.scss";
import { destinations } from "../../data";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(16);
  const [filter, setFilter] = useState(destinations);
  const [activeButtonId, setActiveButtonId] = useState("all");
  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);

  const maxPrice = destinations.reduce((max, destination) => {
    return destination.price > max ? destination.price : max;
  }, 0);

  const minPrice = destinations.reduce((min, destination) => {
    return destination.price < min ? destination.price : min;
  }, Infinity);

  /**
   * @param {string} Infinity When using Infinity as the initial value, the min variable starts with a value of positive infinity. As a result, the first destination's price will be the minimum price, regardless of its actual value. For subsequent destinations, the code will compare their prices with the current value of min and update min if a smaller price is found. This approach ensures that the minimum price is updated correctly throughout the loop and that the final result will be the minimum price among all the destinations.
   */

  // State to track current price (minimum)
  const [price, setPrice] = useState(maxPrice);

  // useEffect to update the 'price' state when 'minPrice' changes
  useEffect(() => {
    setPrice(maxPrice);
  }, [maxPrice]);

  // Function to show more destinations when the button is clicked
  const showMore = () => {
    setLoad((previousValue) => previousValue + 16);
  };

  // When the load reaches its maximum value, the button will be disabled, and the cursor will change to "not-allowed"
  const isButtonDisabled = load >= filter.length;

  // Combine continent and price filters into a single function
  const filterDestinations = (): void => {
    let filteredDestinations = destinations;

    if (activeButtonId !== "all") {
      // Convert activeButtonId to lowercase for comparison
      const selectedContinent = activeButtonId.toLowerCase();

      // Apply continent filter only if a continent other than "All" is selected
      filteredDestinations = filteredDestinations.filter(
        (destination) =>
          destination.continent.toLowerCase() === selectedContinent
      );
    }

    // Apply price filter only if the user has interacted with the price range
    if (isPriceFilterActive) {
      filteredDestinations = filteredDestinations.filter(
        (destination) => destination.price <= price
      );
    }

    setFilter(filteredDestinations);
  };

  // useEffect to update 'filter' state when 'activeButtonId' or 'price' changes
  useEffect(() => {
    filterDestinations();
  }, [activeButtonId, price, isPriceFilterActive]);

  // Function to reset all the filters selected
  const clearFilters = () => {
    setFilter(destinations);
    setPrice(maxPrice);
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
              onClick={() => handleButtonClick("all")}
              className={activeButtonId === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => handleButtonClick("africa")}
              className={activeButtonId === "africa" ? "active" : ""}
            >
              Africa
            </button>
            <button
              onClick={() => handleButtonClick("america")}
              className={activeButtonId === "america" ? "active" : ""}
            >
              America
            </button>
            <button
              onClick={() => handleButtonClick("antarctica")}
              className={activeButtonId === "antarctica" ? "active" : ""}
            >
              Antarctica
            </button>
            <button
              onClick={() => handleButtonClick("asia")}
              className={activeButtonId === "asia" ? "active" : ""}
            >
              Asia
            </button>
            <button
              onClick={() => handleButtonClick("australia")}
              className={activeButtonId === "australia" ? "active" : ""}
            >
              Australia
            </button>
            <button
              onClick={() => handleButtonClick("europe")}
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
                setIsPriceFilterActive(true);
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
