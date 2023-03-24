import "../css/home.css";
import "../css/video.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MyPagination from "../components/MyPagination";
import HeaderVideo from "../components/HeaderVideo";
import Header2 from "../components/Header2";

const Videos = ({ search, setSearch, page, setPage }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/videos/search?query=${search}&page=${page}&per_page=15`,
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
  }, [search, page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/videos/popular?page=${page}&per_page=15`,
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
    </div>
  ) : (
    <>
      <HeaderVideo search={search} setSearch={setSearch} />
      <Header2 search={search} setSearch={setSearch} />
      <div className="container">
        <MyPagination page={page} setPage={setPage} />

        <div>
          <h2>Vidéos gratuites</h2>
        </div>

        <div className="All-videos">
          {data.videos.map((video) => {
            return (
              <div key={video.id}>
                {video.video_files
                  .map((item) => {
                    return (
                      <div className="video" key={item.id}>
                        <video
                          controls
                          onMouseOver={(event) => event.target.play()}
                          onMouseOut={(event) => event.target.pause()}
                        >
                          <source src={item.link} type="video/mp4"></source>
                        </video>
                      </div>
                    );
                  })
                  .pop()}
              </div>
            );
          })}
        </div>
        <MyPagination page={page} setPage={setPage} />
      </div>
    </>
  );
};
export default Videos;
