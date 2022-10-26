import { useState } from 'react'
import {Arrow} from '../../assets/icons/Arrow'
import './Gallery.scss'

export default function Gallery({ data }) {

  const [galleryState, setgalleryState] = useState(0)

  return (
    <figure className='acco-gallery'>
      {data.pictures.length > 1 ? (
        <div>
          <div className='acco-gallery__arrow-nav' onClick={() => galleryState > 0 ? setgalleryState(galleryState - 1) : setgalleryState(data.pictures.length - 1)}>
            <Arrow />
          </div>
          <div className='acco-gallery__arrow-nav right'  onClick={() => galleryState !== data.pictures.length - 1 ? setgalleryState(galleryState + 1) : setgalleryState(0)}>
            <Arrow />
          </div>
          <span>{galleryState + 1}/{data.pictures.length}</span>
          </div>
      ) : (
        ''
      )}
      <img src={data.pictures[galleryState]} alt="" />
    </figure>
  )
}