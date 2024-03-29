import Image from 'next/image'
import SectionHeader from './subComponents/SectionHeader'

export default ({ experienceData }) => {
  return (
    <section className="page-section" id="experience">
      <div className="container">
        <SectionHeader title="Experiences" description="" />
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              {
                experienceData && experienceData.map(({ title, description, date, imgPath }, index) =>
                  <li key={`Experience-${index}`} className={index%2 === 1? "timeline-inverted": ""}>
                    <div className="timeline-image">
                      <Image className="rounded-circle img-fluid" src={imgPath} alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>{date}</h4>
                        <h4 className="subheading">{title}</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text">{description}</p>
                      </div>
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}