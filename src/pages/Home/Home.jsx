import homePicture from "../../assets/home-picture.jpg";
import "./Home.scss";
import data from "../../data/data.json";
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard";

export default function Home() {
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
          {data.map(({ cover, title, id }) => (
            <AccommodationCard 
              key={id}
              id={id}
              cover={cover}
              title={title}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
