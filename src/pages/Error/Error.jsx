import { Link } from 'react-router-dom'
import './Error.scss'
import { useEffect } from 'react'

export default function Error() {

  useEffect(() => {
    document.title = `Kasa | Erreur 404`
  })

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