import data from '../../data/data.json'
import { useParams, Link } from 'react-router-dom'
import './Accommodation.scss'
import { useEffect } from 'react'
import { RedStar } from '../../assets/icons/RedStar'
import { GreyStar } from '../../assets/icons/GreyStar'
import Collapse from '../../components/Collapse/Collapse'
import Gallery from '../../components/Gallery/Gallery'

export default function Accommodation() {

  const { id } = useParams()
  const accoId = ({id})

  const accoData = data.find(e => e.id === accoId.id)

  const range = [1, 2, 3, 4, 5]

  useEffect(() => {
    document.title = accoData ? `Kasa | ${accoData.title}` : 'Kasa | Logement introuvable'
  })
  
  return accoData ? (
    <div className="responsive">
      <Gallery
        data={accoData}
      />
      <section className='acco-container'>
        <div className='acco-container__info'>
          <div className='acco-container--title'>
            <h1>{accoData.title}</h1>
            <h2>{accoData.location}</h2>
            <ul>
              {accoData.tags.map((e) => 
                <li key={e}>{e}</li>
              )}
            </ul>
          </div>
          <div className='acco-container--host-profile'>
            <div className='acco-container--host-profile__profile'>
              <p>{accoData.host.name}</p>
              <img src={accoData.host.picture} alt="" />
            </div>
            <div className='acco-container--host-profile__rating'>
                {range.map((e, i) => 
                  accoData.rating >= e ? (
                    <RedStar
                      key={i}
                    />
                  ) : (
                    <GreyStar 
                      key={i}
                    />
                  )
                )}
            </div>
          </div>
        </div>
        <div className='acco-container__description'>
          <Collapse
            title='Decription'
            content={accoData.description}
            type='p'
          />
          <Collapse 
            title='Équipements'
            content={accoData.equipments}
            type='ul'
          />
        </div>
      </section>
    </div>
  ) : (
    <div className='acco-error responsive'>
      <p>Le logement que vous essayez de consulter n'existe pas ou plus</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}