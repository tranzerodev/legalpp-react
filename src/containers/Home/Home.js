import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'
import Modal from 'components/Modal'

import svgMaven from 'assets/svgs/maven.svg'
import svgStartups from 'assets/svgs/start-ups.svg'
import svgInteraction from 'assets/svgs/interaction.svg'
import imgScreen from 'assets/images/screen.jpg'
import imgTopics from 'assets/images/topics.png'
import svgIncorporate from 'assets/svgs/incorporate.svg'
import svgPayroll from 'assets/svgs/payroll.svg'
import svgTrademark from 'assets/svgs/trademark.svg'
import svgInsurance from 'assets/svgs/insurance.svg'
import svgForms from 'assets/svgs/forms.svg'
import svgDocument from 'assets/svgs/documents.svg'
import imgLanding from 'assets/svgs/landing.jpg'
import homeimg from 'assets/svgs/home.png'
import iconall from 'assets/svgs/icon1.png'
import iconall1 from 'assets/svgs/icon2.png'
import iconall2 from 'assets/svgs/icon3.png'
import laptop1 from 'assets/svgs/laptop.png'
import imageshape from 'assets/svgs/Form.png'
import vector from 'assets/svgs/Vektor.png'
import vectornew from 'assets/svgs/VectorSmart1.png'
import vectorimg from 'assets/svgs/VectorSmart2.png'
import vectoricon from 'assets/svgs/VectorSmart3.png'
import vectoricon1 from 'assets/svgs/VectorSmart4.png'
import vectoroject from 'assets/svgs/VectorObject.png'
import footbg from 'assets/svgs/footbg.png'
import arrow from 'assets/svgs/arrow.png'
import shape from 'assets/svgs/border.png'
import formimg from 'assets/svgs/form1.png'
import mousecursor from 'assets/svgs/mousecursor.png'
import arrownew from 'assets/svgs/arrownew.png'

import Button from 'components/Button'
import './styles.css'


const Entry = ({ icon, title, description, onClick }) => (

  <div className='entry mb-4'>
    <img className='mr-4' src={icon} alt='icon' />
    <div>
      <h5>{title}</h5>
      <p>{description}</p>
      <h6 className='entry__link' onClick={onClick}>
        Get Started
      </h6>
    </div>
  </div>
)

const HEADER_HEIGHT = 72
class Home extends Component {
  state = {
    confirmVisible: false,
    currentTopic: null
  }

  componentDidMount() {
    this.scrollToAnchor(this.props.location.hash)

    // It is necessary for UI, especially header
    document.body.classList.add('header-transparent')
    window.addEventListener('scroll', this.handleScroll)

    const { user, documents, getDocuments } = this.props
    if (user.authenticated) {
      if (!documents.documents.length) {
        getDocuments()
      }
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('header-transparent')
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentWillReceiveProps({ location }) {
    if (location !== this.props.location) {
      this.scrollToAnchor(location.hash, true)
    }
  }

  scrollToAnchor = (hash, smooth) => {
    if (!hash) return

    const ele = document.querySelector(hash)
    if (ele) {
      window.scrollTo({
        top: ele.offsetTop - HEADER_HEIGHT,
        behavior: smooth ? 'smooth' : 'auto'
      })
    }
  }

  handleScroll = event => {
    const scrollTop = window.scrollY
    if (scrollTop < 40) {
      document.body.classList.add('header-transparent')
    } else {
      document.body.classList.remove('header-transparent')
    }
  }

  toggleConfirm = () => {
    this.setState({ confirmVisible: !this.state.confirmVisible })
  }

  onTopic = id => () => {
    const { documents, user } = this.props

    this.setState({ currentTopic: id }, () => {
      if (
        user.authenticated &&
        documents.documents.find(e => {
          return e.program.id === id && e.content.node.kind !== 'Final'
        })
      ) {
        this.toggleConfirm()
      } else {
        this.onStartNew()
      }
    })
  }

  onStartNew = () => {
    const { currentTopic } = this.state
    this.props.changeRoute(`/programs/${currentTopic}`)
  }

  onContinue = () => {
    const { currentTopic } = this.state
    this.toggleConfirm()
    this.props.changeRoute(`/account/documents?filter=${currentTopic}`)
  }

  render() {
    const { confirmVisible } = this.state
    return (
      <div className='lg-homepage new'>
        <section className='section section-landing'>
          <img className='img-back' src={homeimg} alt='Landing' />
          <div className='container'>
            <div className='row py-4'>
              <div className='col-12 col-md-8 mb-8'>
                <div className='slidetext'>
                  <h1 className='mb-4'>Get to the Right Answer. <i>Faster.</i></h1>
                  <p>Legal Maven is the only automated legal tool to help startup founders get answers to their legal questions.</p>
                  <p className="topslide_bt">
                    <AnchorLink
                      offset={HEADER_HEIGHT}
                      className='button1'
                      href='#topics'
                    >
                      Get Started  <img className='my-2 aroow' src={arrow} alt='arrow' />
                    </AnchorLink></p>
                </div>
              </div>
            </div>
            <div class="mouse">
              <AnchorLink
                offset={HEADER_HEIGHT}
                className='to-below'
                href='#services'
              >
                <img className='my-2 mouseclick' src={mousecursor} alt='mousecursor' />
              </AnchorLink>
            </div>
          </div>
        </section>



        <section className='section section-what' id='services'>
          <div className='container my-5'>
            <h5>Legal Maven is an automated self-help application created by attorneys
            that helps you get immediate answers to your legal questions and generate relevant tailor-made
            legal documents.</h5>

          </div>
        </section>

        <section className='section section-line' id='line'>
          <div className='container my-3'>
            <img className='img-back shape' src={shape} alt='shape' />
          </div>
        </section>



        <section className='section section-why'>
          <div className='container'>
            <h3 className='my-4 legalvalue'>Why Legal Maven is easy AND RELIABLE</h3>
            <div className='row py-4'>
              <div className='col-12 col-md-4 mb-4'>
                <div className='align-icon'>
                  <img className='my-2' src={iconall} alt='Maven' />
                </div>
                <h6 className='my-2'>Automated Services</h6>
                <small className='my-2'>
                  Our legal topics and forms are created and vetted by top-notch attorneys whose expertise is distilled into an automated, user-friendly format.
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
                <div className='align-icon'>
                  <img className='my-2' src={iconall1} alt='Start-ups' />
                </div>
                <h6 className='my-2'>One-Stop Shop</h6>
                <small className='my-2'>
                  Decide what type of entity is right for your business, prepare
                  formation documents, and get answers to important legal
                  questions relating to your business.
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
                <div className='align-icon'>
                  <img className='my-1' src={iconall2} alt='Customized Documents' />
                </div>
                <h6 className='my-2'>Legally Compliant</h6>
                <small className='my-2'>
                  Our legal tools are constantly updated to<br></br> keep up with ever changing rules and regulations.
                </small>
              </div>
            </div>
          </div>
        </section>





        <section className='section section-how'>
          <div className='formimg1'>   <img
            className='img-back_new'
            src={imageshape}
            alt='Screen'
          />
          </div>
          <div className='container my-2 my-sm-5'>
            <div className='row my-md-4'>
              <div className='col-sm-12 col-md-6 col-lm-6 d-flex justify-content-center flex-column'>
                <h1 className='mb-5 text-center text-md-left'>Less spending,<br></br>more doing.</h1>
                <span>
                  Here at Legal Maven, we know how valuable time and money are for startups. Legal Maven is the solution that avoids steep attorney bills and provides immediate answers.</span>
                <span>Legal Maven streamlines access to high quality legal solutions so you can get back to doing what you do best. Answer a series of questions relevant to your startup and reach a conclusion based on the legal information provided. It's just that easy.
									</span>
              </div>
              <div className='col-sm-12 col-md-6 col-lm-6'>
                <img
                  className='img-back'
                  src={laptop1}
                  alt='Screen'
                />

              </div>

            </div>

          </div>
          <div className='formimg'>  <img
            className='img-back_new'
            src={formimg}
            alt='Screen'
          />
          </div>

        </section>


        <section className='section section-topics-summary' id="topics">
      
          <div className='container-fluid my-2 my-sm-5'>
            <div className='row'>
            <div className='col-sm-12 col-md-7 col-lm-7 left_sec'>
                <img className='img-back' src={vector} alt='vector' />

              </div>
              <div className=' col-sm-12 col-md-5 col-lm-5 textright'>
                <div className='text-center text-sm-left'>
                  <p className='mb-0 serve'>our services</p>
                  <h1 className='mb-4 hserve'>Legal Topics</h1>
                  <small className='mb-5 pserve'>
                    Startups face important legal decisions and must comply with a number of state, federal and local laws.
                  </small>

                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='section section-topics' id='topicst'>
          <div className='container my-2 my-sm-5'>
            <div className='row my-2'>
              <div className='col-12 col-md-6 left_new text-xs-center'>
                <div className='align-icon__topic'>
                  <img className='my-2' src={vectornew} alt='Customized Documents'/>
                </div>
                <h6 className='mb-2 htopics'>Choice of Entity</h6>
                <small className='mb-5 Ptopics'>Your choice of entity may have important tax and other legal consequences.</small>
                <p className='mb-5'><Link to="/programs/incorporate" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                  Get Started
                  </Link></p>
              </div>
              <div className='col-sm-12 col-md-6 col-lm-6 text-xs-center'>
                <div className='align-icon__topic'>
                  <img className='my-2' src={vectorimg} alt='Customized Documents'/>
                </div>
                <h6 className='mb-2 htopics'>Protect your Intellectual Property</h6>
                <small className='mb-4 Ptopics'>Available legal protections include, trademarks, patents, copyrights and non-disclosure agreements.</small>
                <p className='mb-5'><Link to="/programs/trademark" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                  Get Started
                  </Link></p>
              </div>
              <div className='col-sm-12 col-md-6 col-lm-6 left_new text-xs-center'>
                <div className='align-icon__topic'>
                  <img className='my-2' src={vectoricon} alt='Customized Documents'/>
                </div>
                <h6 className='mb-2 htopics'>Do I need to set up payroll?</h6>
                <small className='mb-4 Ptopics'>Failure to make required withholding or pay required payroll taxes may result in significant penalties.</small>
                <p className='mb-5'> <Link to="/programs/payroll" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                  Get Started
                  </Link></p>
              </div>
              <div className='col-sm-12 col-md-6 col-lm-6 text-xs-center'>
                <div className='align-icon__topic'>
                  <img className='my-2' src={vectoricon1} alt='Customized Documents'/>
                </div>
                <h6 className='mb-2 htopics'>Do I need workers’ compensation insurance?
</h6>
                <small className='mb-4 Ptopics'>Almost all states require businesses to carry workers' compensation insurance for their non-exempt employees.</small>
                <p className='mb-5'> <Link to="/programs/workerscomp" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                  Get Started
                  </Link></p>
              </div>
            </div>
          </div>
        </section>


        <section className='section section-topics-summary' id="topicnew">
          <div className='container my-2 my-sm-5'>
            <div className='row'>
              <div className=' img-container col col-sm-12 col-md-6 col-lm-6'>
                <img className='img-back' src={vectoroject} alt='Forms' />

              </div>
              <div className=' col-sm-12 col-md-6 col-lm-6 d-flex align-items-center'>
                <div className='text-center text-sm-left'>
                  <p className='mb-0 serve'>Create your</p>
                  <h1 className='mb-4 hserve'>Legal Form</h1>
                  <small className='mb-5 pserve'>
                    Get your legal paperwork done correctly and with confidence.
                  </small>

                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='section section-forms' id='forms'>
          <div className='container my-2 my-sm-5'>
            <h3 className='text-center mb-5 '>Formation and Incorporation Documents</h3>
            <div className='row my-2'>
              <div className='col-sm-12 col-md-6 col-lm-6'>
                <div className="border pd-2">
                  <div className='leftco'>
                    <h6 className='mb-0 pform'>Limited Liability Company</h6>
                    <small className='poper mb-4'>Articles of Organization</small>

                  </div>
                  <div className='rightco'>
                    <p className='pbutton mb-3 my-3'><Link to="/programs/llc" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                      Get Started
                  </Link></p></div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 col-lm-6 '>
                <div className="border pd-2">
                  <div className='leftco'>
                    <h6 className='mb-0 pform'>Limited Liability Company</h6>
                    <small className='poper mb-4'>Operating Agreements</small>
                  </div>
                  <div className='rightco'>
                    <p className='pbutton mb-3 my-3'><Link to="/programs/llc_operating" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                      Get Started
                  </Link></p></div>
                </div>
              </div>
            </div>

            <h4 className='mb-5 my-5 text-center htext'>General Stock Corporation</h4>
            <div className='row my-2'>
              <div className='col-sm-12 col-md-6 col-lm-6'>
                <div className="border pd-2">
                  <div className='leftco'>
                    <h6 className='mb-0 pform'>S-Corporation</h6>
                    <small className='poper mb-4'>Articles of Incorporation</small>

                  </div>
                  <div className='rightco'>
                    <p className='pbutton mb-2 my-2'><Link to="/programs/general_s_corporation" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                      Get Started
                  </Link></p></div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 col-lm-6'>
                <div className="border pd-2">
                  <div className='leftco'>
                    <h6 className='mb-0 pform'>C-Corporation</h6>
                    <small className='poper mb-4'>Articles of Incorporation</small>

                  </div>
                  <div className='rightco'>
                    <p className='pbutton mb-2 my-2'><Link to="/programs/general_c_corporation" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                      Get Started
                  </Link></p></div>
                </div>
              </div>
            </div>
            <h4 className='mb-5 my-5 text-center htext'>Professional Corporation</h4>
            <div className='row my-2'>
              <div className='col-sm-12 col-md-6 col-lm-6'>
                <div className="border pd-2">
                  <div className='leftco'>
                    <h6 className='mb-0 pform'>S-Corporation</h6>
                    <small className='poper mb-4'>Articles of Incorporation</small>

                  </div>
                  <div className='rightco'>
                    <p className='pbutton mb-2 my-2'><Link to="/programs/professional_s_corporation" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                      Get Started
                  </Link></p></div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 col-lm-6'>
                <div className="border pd-2">
                  <div className='leftco'>
                    <h6 className='mb-0 pform'>C-Corporation
</h6>
                    <small className='poper mb-4'>Articles of Incorporation</small>

                  </div>
                  <div className='rightco'>
                    <p className='pbutton mb-2 my-2'><Link to="/programs/professional_c_corporation" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                      Get Started
                  </Link></p></div>
                </div>
              </div>
            </div>

            {/* <h3 className='text-center mb-5'>Deeds</h3>
            <div className='row my-2'>
              <div className='col-12 col-md-6'>
                <Entry
                  icon={svgDocument}
                  title='CA - Grant Deed'
                  description=''
                  onClick={this.onTopic('ca_grant_deed')}
                />
              </div>
            </div> */}
          </div>

          <div className='container my-2 my-sm-5'>
            <h3 className='text-center mb-5 '>Other Documents</h3>
            <div className='row my-2'>
              <div className='col-sm-12 col-md-6 col-lm-6'>
                <div className="border pd-2">
                  <div className='leftco'>
                    <h6 className='mb-0 pform'>Non-Disclosure Agreement
</h6>

                  </div>
                  <div className='rightco'>
                    <p className='pbutton mb-3'><Link to="/programs/nda" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                      Get Started
                  </Link></p></div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 col-lm-6'>
                <div className="border pd-2">
                  <div className='leftco'>
                    <h6 className='mb-0 pform'>Website Terms of Use</h6>
                  </div>
                  <div className='rightco'>
                    <p className='pbutton mb-2'><Link to="/programs/website_terms_of_use" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                      Get Started
                  </Link></p></div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className='footbg'>
          <img
            className='my-0 img-back'
            src={footbg}
            alt='footbg'
          />

        </section>

        <section className='section section-questions py-5' id='contact'>

          <div className='footco'>
            <div className='container'>
              <div className='row'>

                <div className=' col-md-8'>
                  <p className='mb-0 conco serve'>Need help?</p>
                  <h2 className='my-0'>Questions? We're here to help.</h2>
                  <p className='my-2'>
                    Send a message to{' '}
                    <a ref='supportLink' href='mailto:support@legalmaven.com'>
                      support@legalmaven.com
              </a>{' '}
                    and let us know how we can help!
            </p></div>
                <div className=' col-md-4'><Button
                  className='my-5 buttonbg fwlow'
                  onClick={() => this.refs.supportLink.click()}
                >
                  Contact Us <img className='my-2 aroow' src={arrownew} alt='arrow' />
                </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='section section-questions py-5' id="copyright">
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 copyright'>
                <small> Legal Maven is not an attorney or a law firm. We provide services for self-help at your specific direction.</small>
                <small>Copyright © 2019 Legal Maven LLC, Santa Monica, California</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8 term'>
                <small><Link to="/Transform#top-trade" className='newtrade'>Legal Maven®</Link> is a registered trademark of Legal Maven LLC. All rights reserved.</small></div>
              <div className='col-md-4 term'>
                <a className='ml-5' href='/termofuse' target='_blank'>
                  Terms of Use
              </a>

              </div>
            </div>
          </div>

        </section>


        <Modal.Confirm
          isOpen={confirmVisible}
          toggle={this.toggleConfirm}
          title={'Do you want to continue?'}
          text={'There are already saved forms. Do you want to continue?'}
          onOK={this.onContinue}
          onCancel={this.onStartNew}
        />

        <Link className='lg-feedback-button' to='/feedback'>
          Feedback
        </Link>
      </div>
    )
  }
}

export default Home
