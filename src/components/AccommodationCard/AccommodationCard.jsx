import { Link } from 'react-router-dom'
import './AccommodationCard.scss'

export default function AccommodationCard({ cover, title, id }) {
  return(
    <li>
      <Link to={`/accommodation/${id}`}>
        <figure className='acco-card-figure'>
          <img src={cover} alt="" />
          <figcaption>
            <h2>{title}</h2>
          </figcaption>
        </figure>
      </Link>
    </li>
  )
}