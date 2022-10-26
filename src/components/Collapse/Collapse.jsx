import './Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Collapse({ title, content, type }) {

  const [open, setOpen] = useState(false)


  return(
    <li className={open ? 'collapse active' : 'collapse'}>
      <button onClick={() => setOpen(!open)}>
        {title}
        <FontAwesomeIcon className={open ? 'icon open' : 'icon'} icon={faChevronDown} />
      </button>
      {type === 'p' ? (
        <p className={open ? 'active' : ''}>{content}</p>
      ) : (
        <ul className={open ? 'active' : ''}>
          {content.map((e, i) =>
            <li key={i}>{e}</li>
          )}
        </ul>
      )}
    </li>
  )
}