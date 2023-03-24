import "../css/header.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import logo from "../images/pexels-white.png";

const HeaderVideo = ({ search, setSearch }) => {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="all-header-one">
        <div className="all-header">
          <div className="container">
            <div className="header">
              <div className="logo-pexels">
                <a href="/" target="blank">
                  <img src={logo} alt="logo Pexels" />
                </a>
              </div>

              <nav>
                <ul className="top-nav">
                  <div onClick={refreshPage}>
                    <Link to="/" className="text-nav">
                      <li>Accueil</li>
                    </Link>
                  </div>

                  <div onClick={refreshPage}>
                    <Link to="/videos" className="text-nav">
                      <li>Vidéos</li>
                    </Link>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <Carousel
          className="carousel"
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={20000}
        >
          <video loop autoPlay="autoplay">
            <source
              src="https://res.cloudinary.com/dvfsuflfr/video/upload/v1679047230/surfer_vx2jer.mp4"
              type="video/mp4"
            ></source>
          </video>
          <video loop autoPlay="autoplay">
            <source
              src="https://res.cloudinary.com/dvfsuflfr/video/upload/v1679049350/moto_g7wwdz.mp4"
              type="video/mp4"
            ></source>
          </video>
          <video loop autoPlay="autoplay">
            <source
              src="https://res.cloudinary.com/dvfsuflfr/video/upload/v1679047091/breakdance_fv4uva.mp4"
              type="video/mp4"
            ></source>
          </video>
          <video loop autoPlay="autoplay">
            <source
              src="https://res.cloudinary.com/dvfsuflfr/video/upload/v1679047385/friends_q26yvj.mp4"
              type="video/mp4"
            ></source>
          </video>
        </Carousel>

        <div className="top-search">
          <div className="all-searches">
            <h1 className="header-baseline">
              Les meilleures vidéos libre de droit partagées par la communauté
              de Pexels.
            </h1>

            <input
              className="filter-search"
              value={search}
              type="search"
              name="search"
              placeholder="Search for free photos"
              onChange={handleSearchChange}
            />

            <div className="all-trend">
              <div className="trends">
                <span className="first-word">Tendance : </span>
                <Link to="/search/videos/mountain">
                  <span className="second-word">mountain, </span>
                </Link>
                <Link to="/search/videos/nature">
                  <span className="second-word">nature, </span>
                </Link>
                <Link to="/search/videos/beach">
                  <span className="second-word">plage, </span>
                </Link>
                <Link to="/search/videos/coffee">
                  <span className="second-word">café, </span>
                </Link>
                <Link to="/search/videos/flower">
                  <span className="second-word">fleur</span>
                </Link>
              </div>
              <div className="more-trends">
                <div className="more">
                  <div className="more-round"></div>
                  <div className="more-round"></div>
                  <div className="more-round"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderVideo;
