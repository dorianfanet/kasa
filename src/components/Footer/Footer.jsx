import './Footer.scss'
import logoWhite from '../../assets/logo-white.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      <img src={logoWhite} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}