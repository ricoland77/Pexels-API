import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import MyPagination from "../components/MyPagination";

import downloadPicto from "../images/download.svg";

const Coffee = ({ search, setSearch, page, setPage }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=coffee&page=${page}&per_page=15`,
          {
            headers: {
              Authorization:
                "Dw6FA4ZjYZ7UtpH2H5lEzcMMiZEl6znft2tGQTMv2f5JyYmJKX5dgELY",
            },
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        res.status(400).json(error.message);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/curated?page=${page}&per_page=15`,
          {
            headers: {
              Authorization:
                "Dw6FA4ZjYZ7UtpH2H5lEzcMMiZEl6znft2tGQTMv2f5JyYmJKX5dgELY",
            },
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page]);

  return isLoading ? (
    <div className="container-loader">
      <p>Loading...</p>
      {/* <img className="loader" src={loader} alt="Gif de chargement" /> */}
    </div>
  ) : (
    <>
      <Header search={search} setSearch={setSearch} />
      <Header2 search={search} setSearch={setSearch} />
      <div className="container">
        <MyPagination page={page} setPage={setPage} />

        <div>
          <h2>Photos gratuites</h2>
        </div>
        <div className="All-photos">
          {data.photos.map((photo) => {
            const downloadImage = () => {
              saveAs(photo.src.original, `${photo.photographer}©.jpeg`);
            };

            return (
              <div className="photo-box" key={photo.id}>
                <Link className="photo" to={`/photos/${photo.id}`}>
                  <img src={photo.src.original} alt="visual" />
                </Link>
                <div className="show-me">
                  <img
                    className="download-picto"
                    src={downloadPicto}
                    alt="download picto"
                    onClick={downloadImage}
                  />
                </div>
                <div className="show-me">
                  <a
                    className="photographer"
                    href={photo.photographer_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {photo.photographer}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <MyPagination page={page} setPage={setPage} />
      </div>
    </>
  );
};
export default Coffee;
