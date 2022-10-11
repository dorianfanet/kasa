import './Dropdown.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Dropdown({ title, content }) {

  const [open, setOpen] = useState(false)


  return(
    <li className={open ? 'dropdown active' : 'dropdown'}>
      <button onClick={() => setOpen(!open)}>
        {title}
        <FontAwesomeIcon className={open ? 'icon open' : 'icon'} icon={faChevronDown} />
      </button>
      <p className={open ? 'active' : ''}>{content}</p>
    </li>
  )
}