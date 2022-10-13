import { Link } from 'react-router-dom'
import './AccommodationCard.scss'

export default function AccommodationCard({ cover, title, location, id }) {
  return(
    <li>
      <Link to={`/accommodation/${id}`}>
        <figure className='acco-card-figure'>
          <img src={cover} alt="" />
          <figcaption>
            <h2>{title}</h2>
            <h3>{location}</h3>
          </figcaption>
        </figure>
      </Link>
    </li>
  )
}