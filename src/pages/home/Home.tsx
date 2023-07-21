import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import "./home.scss";
import Video from "../../components/video/Video";
import Stats from "../../components/stats/Stats";
import Highlights from "../../components/highlights/Highlights";

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__info">
          <h1 className="home__headline">Discover the world with us</h1>
          <p className="home__paragraph">
            We believe in a travelling experience by providing our tour plan
            that suits you the best.
          </p>
          <div className="home__trip">
            <Link to="/destinations" className="home__tripLink">
              Plan a trip
            </Link>
            <button>
              <AiFillPlayCircle className="home__tripIcon" />
              <Video />
            </button>
          </div>
          <hr></hr>
          <div className="home__quote">
            <img src="./assets/me.jpg" alt="person"></img>
            <img
              src="./assets/32f97bf9fcc0143aa1634c3a1b5a458f.jpg"
              alt="person"
            ></img>
            <div className="home__phrase">
              <span>
                No matter where you travel, I encourage you to take in the
                sights, sounds, and experiences of your destination.
              </span>
            </div>
          </div>
        </div>
        <div className="home__images">
          <img src="./assets/algarve.jpg" alt="algarve"></img>
          <img src="./assets/benidorm4.jpg" alt="benidorm"></img>
        </div>
      </div>
      <Highlights />
      <Stats />
    </div>
  );
};

export default Home;
