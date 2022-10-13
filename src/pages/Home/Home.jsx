import homePicture from "../../assets/home-picture.jpg";
import "./Home.scss";
import data from "../../data/data.json";
import { useEffect } from "react";
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard";

export default function Home() {

  useEffect(() => {
    document.title = `Kasa | Home`
  })

  return (
    <div className="home responsive">
      <figure className="home__image">
        <img
          src={homePicture}
          alt=""
        />
        <figcaption>
          <h1>Chez vous, partout et ailleurs</h1>
        </figcaption>
      </figure>
      <section className="home__acco-list">
        <ul>
          {data.map(({ cover, title, location, id }) => (
            <AccommodationCard 
              key={id}
              id={id}
              cover={cover}
              title={title}
              location={location}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
