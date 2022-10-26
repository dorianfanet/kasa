import aboutData from "../../data/aboutData.json"
import Dropdown from "../../components/Collapse/Collapse"
import './About.scss'
import { useEffect } from "react"
import aboutPicture from "../../assets/about-picture.jpg"

export default function About() {

  useEffect(() => {
    document.title = `Kasa | À propos`
  })

  return(
    <div className="about-container responsive">
      <figure>
        <img src={aboutPicture} alt="" />
      </figure>
      <section className="about-container__dropdown-list">
        <ul>
          {aboutData.map(({ title, content, type }) => 
            <Dropdown
              key={title}
              title={title}
              content={content}
              type='p'
            />
          )}
        </ul>
      </section>
    </div>
  )
}