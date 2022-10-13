import {Arrow} from '../../assets/icons/Arrow'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import './Accommodation.scss'
import { useState } from 'react'
import { RedStar } from '../../assets/icons/RedStar'
import { GreyStar } from '../../assets/icons/GreyStar'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function Accommodation() {

  const { id } = useParams()
  const accoId = ({id})

  const accoData = data.find(e => e.id === accoId.id)

  const [lightboxState, setLightboxState] = useState(0)
  
  const range = [1, 2, 3, 4, 5]
  
  return(
    <div className="responsive">
      <figure className='acco-lightbox'>
        {accoData.pictures.length > 1 ? (
          <div>
            <div className='acco-lightbox__arrow-nav' onClick={() => lightboxState > 0 ? setLightboxState(lightboxState - 1) : setLightboxState(accoData.pictures.length - 1)}>
              <Arrow />
            </div>
            <div className='acco-lightbox__arrow-nav right'  onClick={() => lightboxState !== accoData.pictures.length - 1 ? setLightboxState(lightboxState + 1) : setLightboxState(0)}>
              <Arrow />
            </div>
            <span>{lightboxState + 1}/{accoData.pictures.length}</span>
            </div>
        ) : (
          ''
        )}
        <img src={accoData.pictures[lightboxState]} alt="" />
      </figure>
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
                {range.map((e) => 
                  accoData.rating >= e ? (
                    <RedStar />
                  ) : (
                    <GreyStar />
                  )
                )}
            </div>
          </div>
        </div>
        <div className='acco-container__description'>
          <Dropdown
            title='Decription'
            content={accoData.description}
            type='p'
          />
          <Dropdown 
            title='Équipements'
            content={accoData.equipments}
            type='ul'
          />
        </div>
      </section>
    </div>
  )
}