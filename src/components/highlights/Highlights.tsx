import { AiOutlineLink } from "react-icons/ai";
import { destinations } from "../../data";
import { Link } from "react-router-dom";
import "./highlights.scss";

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="highlights__box highlights__box1">
        <img src="./assets/ny2.jpg" alt="destination"></img>
        {/* 
            
            PUT THE ID ON THE LINK AFTER
            
            */}
        <div className="highlights__link">
          <Link
            to={`/destinations/${destinations[1].id}`}
            className="highlights__icon"
          >
            <h2 className="highlights__headline">New york city</h2>
            <AiOutlineLink />
          </Link>
        </div>
      </div>

      <div className="highlights__box highlights__box2">
        <img src="./assets/grad.jpg" alt="destination"></img>
        <p className="highlights__text">
          The Nike Dunk Low is an easy score for your wardrobe. This mid-80s
          hoops icon returns with super-durable construction and original
          colours. With ankle padding and rubber traction, this one is a slam
          dunk.
        </p>
        <div className="highlights__link">
          <Link to="/destinations" className="highlights__icon">
            <h2 className="highlights__headline">Destinations</h2>
            <AiOutlineLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
