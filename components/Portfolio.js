import Image from 'next/image'

import SectionHeader from './subComponents/SectionHeader'

export default ({ portfolioData }) => {
  return (
    <section className="page-section" id="portfolio">
      <div className="container">
        <SectionHeader title="Portfolio" description="" />
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="section-subheading text">This website is part of the portfolio made with ReactJS.
              <br/>
              <a className="sourceCode" href="https://github.com/flampdiaz/Portfolio">source code</a>
            </h3>
          </div>
        </div>
        <div className="row">
          {
            portfolioData && portfolioData.map(({ title, description, imgPath, youtubeUrl }, index) =>
              <div key={`portfolio-${index}`} className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" data-target="#portfolioModal1" href={youtubeUrl}>
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">

                    </div>
                  </div>
                  <Image className="img-fluid" src={imgPath} alt="" />
                </a>
                <div className="portfolio-caption bg-dark align-items-center">
                  <h4>{title} </h4>
                  {description !== "" ? <p className="text">{description}</p> : null}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}