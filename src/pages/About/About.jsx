import aboutData from "../../data/aboutData.json"
import Dropdown from "../../components/Dropdown/Dropdown"
import './About.scss'
import aboutPicture from "../../assets/about-picture.jpg"

export default function About() {
  return(
    <section className="about-container responsive">
      <figure>
        <img src={aboutPicture} alt="" />
      </figure>
      <div className="about-container__dropdown-list">
        <ul>
          {aboutData.map(({ title, content }) => 
            <Dropdown
              title={title}
              content={content}
            />
          )}
        </ul>
      </div>
    </section>
  )
}