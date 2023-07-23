import { useState } from "react";
import "./destinations.scss";
import { destinations } from "../../data";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(6);

  const showMore = () => {
    setLoad((previousValue) => previousValue + 3);
  };

  // console.log(destinations.filter((destination) => destination.place.toLowerCase().includes("du")));

  return (
    <div className="destinations">
      <div className="destinations__top">
        <div className="top__left">
          <h2 className="destinations__headline">Destinations</h2>
          <p className="destinations__text">
            Experience the incredible beauty of Scandinavia, the Nordic and
            Baltic countries, scenic landscapes of Ireland and historic sights
            of the United Kingdom. Experience the incredible beauty of Scandinavia, the Nordic and Baltic countries, scenic landscapes of Ireland and historic sights of the United Kingdom.
          </p>
        </div>
        <div className="top__right">
          <img src="./assets/worldgif.gif" alt="world-map"></img>
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
        {destinations
          .filter((destination) =>
            destination.place.toLowerCase().includes(search.toLocaleLowerCase())
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
          ))}
      </div>
      <div className="destinations__buttonBox">
        <button onClick={showMore} className="destinations__button">
          More destinations
        </button>
      </div>
      {/* REMINDER TO MAKE A FILTER */}
    </div>
  );
};

export default Destinations;
