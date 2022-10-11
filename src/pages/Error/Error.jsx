import { Link } from 'react-router-dom'
import './Error.scss'

export default function Error() {
  return(
    <div className='error-container responsive'>
      <div>
        <span>404</span>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}