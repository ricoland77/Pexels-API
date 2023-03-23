import "../css/header2.css";
import { Link } from "react-router-dom";

import logo from "../images/pexels-white.png";
import { useEffect, useState } from "react";

const Header2 = ({ search, setSearch }) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    window.addEventListener("scroll", () =>
      setShowHeader(window.scrollY > 500)
    );
    // }
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className={`header ${showHeader ? "" : "sticky"}`}>
      <div className="all-header-one2">
        <div className="all-header2">
          <div className="container2">
            <div className="header2">
              <div className="logo-pexels2">
                <a href="/" target="blank">
                  <img src={logo} alt="logo Pexels" />
                </a>
                <input
                  className="filter-search2"
                  value={search}
                  type="search"
                  name="search"
                  placeholder="Search for free photos"
                  onChange={handleSearchChange}
                />
              </div>

              <nav>
                <ul className="top-nav2">
                  <div onClick={refreshPage}>
                    <Link
                      to="/"
                      className="text-nav2"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <li>Accueil</li>
                    </Link>
                  </div>

                  <div onClick={refreshPage}>
                    <Link
                      to="/videos"
                      className="text-nav2"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <li>Vidéos</li>
                    </Link>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
