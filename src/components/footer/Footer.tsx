import { Link } from "react-router-dom";
import "./footer.scss";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__info">
          <h2 className="footer__logotype">viajar</h2>
          <p className="footer__text">
            The largest most complete and trusted online destinations in the
            world. With us, you can know more about where you want to go & help
            save your high street at the same time.
          </p>
        </div>
        <div className="footer__links">
          <ul className="footer__list">
            <h4 className="footer__headline">
              About <span>viajar</span>
            </h4>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Index
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Destinations
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                About us
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Contact us
              </Link>
            </li>
          </ul>

          <ul className="footer__list">
            <h4 className="footer__headline">Others</h4>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Terms and conditions
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Privacy policy
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                help Center
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__down">
        <p>Copyright © 2023. All rights reserved</p>
        <ul className="footer__listMedia">
          <li className="footer__itemMedia">
            <Link to="" className="footer__linkMedia">
              <AiOutlineTwitter />
            </Link>
          </li>
          <li className="footer__itemMedia">
            <Link to="" className="footer__linkMedia">
              <AiFillGithub />
            </Link>
          </li>
          <li className="footer__itemMedia">
            <Link to="" className="footer__linkMedia">
              <AiFillLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
