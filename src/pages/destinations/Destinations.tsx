import "./destinations.scss";
import { destinations } from "../../data";
import { Link } from "react-router-dom";

const Destinations = () => {
  return (
    <div className="destinations">
      <div className="destinations__top">
        <h2 className="destinations__headline">All our destinations</h2>
        <input
          type="search"
          placeholder="Type to search..."
          className="destinations__search"
        ></input>
      </div>
      <div className="destinations__wrapper">
        {destinations.map((destination) => (
          <Link
            to={`/destinations/${destination.id}`}
            className="destinations__box"
            key={destination.id}
          >
            <img src={destination.img} alt={destination.place} />
            <div className="destination__info">
              <h2 className="destination__place">{destination.place}</h2>
              <p className="destination__text">{destination.title}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* REMINDER TO MAKE A FILTER */}
    </div>
  );
};

export default Destinations;
