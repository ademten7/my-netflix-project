import "./TvShow.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import tvShowsArray from "../../api/tvShows";
const backendURL = process.env.REACT_APP_BACKEND_URL;
export default function TvShow() {
  const { tvShowId } = useParams();
  const [tvShowObject, setTvShowObject] = useState({});
  const [tvShowSeason, setTvShowSeason] = useState({});

  useEffect(() => {
    const getTvShowById = async () => {
      const res = await fetch(`${backendURL}/tv-show/${tvShowId}`);
      const data = await res.json();
      setTvShowObject(data);
      setTvShowSeason(data?.seasons[0]);
    };
    // const getTvShow = tvShowsArray.find((el) => el.id === tvShowId);
    // setTvShowObject(getTvShow);
    // setTvShowSeason(getTvShow.seasons[0]);
    getTvShowById();
  }, [tvShowId]);

  return (
    <div>
      <h1>{tvShowObject?.title}</h1>

      <div className="TvShow">
        <div className="Seasons">
          {tvShowObject?.seasons?.map((el) => (
            <div
              key={el.id}
              className="Season"
              onClick={() => setTvShowSeason(el)}
            >
              {el.title}
            </div>
          ))}
        </div>
        <div className="Episodes">
          {tvShowSeason?.episodes?.map((el) => {
            return (
              <div key={el.id} className="Episode">
                <Link
                  to={`/tv-show-episode/${tvShowObject.id}/${tvShowSeason.id}/${el.id}`}
                >
                  <img
                    className="EpisodeImage"
                    src={el.image}
                    alt=""
                    width="150"
                  />
                </Link>
                <span>{el.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
