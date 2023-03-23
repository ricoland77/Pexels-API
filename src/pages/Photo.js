import "../css/photo.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
// import { Link } from "react-router-dom";

import downloadPicto from "../images/download.svg";

import HeaderPhoto from "../components/HeaderPhoto";

const Photo = ({ search, setSearch }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/photos/${id}`,
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
  }, [id]);

  const downloadImage = () => {
    saveAs(data.src.original, `${data.photographer}©.jpeg`);
  };

  return isLoading ? (
    <div className="container-loader">
      <p>Loading...</p>
    </div>
  ) : (
    <>
      <HeaderPhoto />
      <main className="container-photo">
        <div className="detail-photo-text">
          <span>Photographer:</span>
          <a href={data.photographer_url} target="_blank" rel="noreferrer">
            {data.photographer}
          </a>
        </div>

        <div className="detail-photo">
          <img src={data.src.portrait} alt="visual" />
        </div>
        <button className="download-btn" onClick={downloadImage}>
          <img className="download" src={downloadPicto} alt="picto download" />
          Télécharger
        </button>
        <div className="detail-photo-text"></div>
      </main>
    </>
  );
};

export default Photo;
