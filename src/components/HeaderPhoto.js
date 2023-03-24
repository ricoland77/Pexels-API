import "../css/header.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import logo from "../images/pexels-white.png";

const HeaderPhoto = () => {
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

        <Carousel className="carousel" autoPlay infiniteLoop interval={30000}>
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1677504979/Pexels/pexels-kelly-2519392_t7bifl.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678878423/Pexels/Pok_Rie_vnrpof.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678878384/Pexels/Jaime_Reimer_uyqw8r.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678896560/Pexels/Pixabay_prl2cs.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678897272/Pexels/Riccardo_Bertolo_1_wzmckf.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678899555/Pixabay_qpeuwl.jpg"
            alt=""
          />

          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678896953/Pexels/Quang_Nguyen_Vinh_nobthz.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678898927/Pexels/David_Bartus_fq7h1v.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678897654/Pexels/Cameron_Casey_x3ygfz.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678898441/Pexels/Elianne_Dipp_x7yhte.jpg"
            alt=""
          />
          <img
            className="top-image"
            src="https://res.cloudinary.com/dvfsuflfr/image/upload/v1678898188/Pexels/Lukas_Rodriguez_oqyrrp.jpg"
            alt=""
          />
        </Carousel>
        <div className="top-search">
          <div className="all-searches">
            <h1 className="header-baseline">
              Les plus belles photos et vidéos libres de droits partagées
              gratuitement par des créateurs talentueux.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPhoto;
