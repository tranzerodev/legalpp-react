import React from 'react'
import imgBack from 'assets/images/page-header.jpg'
import imgClock from 'assets/images/clock.png'
import imgCheck from 'assets/images/check.png'
import imgPrint from 'assets/images/print.png'

const PageHeader = () => (
  <section className="page-header">
    <img className="back-image" src={imgBack} alt="Page Header" />
    <div className="overlay">
      <div className="container">
        <div className="title wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="0.6s">
          Legal Forms
        </div>
        <div className="description wow fadeInRight" data-wow-delay="0.5s" data-wow-duration="0.6s">
          Welcome to the quick and simple solution to legal forms.
        </div>

        <div className="content row" data-wow-delay="1.6s">
          <div className="col-4 wow flipInX" data-wow-delay="1.4s">
            <img className="icon" src={imgClock} alt="icon" />
            <div>Quick and easy</div>
          </div>
          <div className="col-4 wow flipInX" data-wow-delay="1.6s">
            <img className="icon" src={imgCheck} alt="icon" />
            <div>Reliable results</div>
          </div>
          <div className="col-4 wow flipInX" data-wow-delay="1.8s">
            <img className="icon" src={imgPrint} alt="icon" />
            <div>Ready for print</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default PageHeader