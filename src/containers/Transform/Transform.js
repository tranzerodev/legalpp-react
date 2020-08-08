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
import footbg from 'assets/svgs/footbg.png'
import arrow from 'assets/svgs/arrow.png'
import shape from 'assets/svgs/border.png'
import formimg from 'assets/svgs/form1.png'
import mousecursor from 'assets/svgs/mousecursor.png'
import arrownew from 'assets/svgs/arrownew.png'
import next from 'assets/svgs/next.png'
import nextvector from 'assets/svgs/nextvector.png'
import object1 from 'assets/svgs/object1.png'
import object2 from 'assets/svgs/object2.png'
import object3 from 'assets/svgs/object3.png'
import object4 from 'assets/svgs/object4.png'
import object5 from 'assets/svgs/object5.png'
import object6 from 'assets/svgs/object6.png'
import object7 from 'assets/svgs/object7.png'
import object8 from 'assets/svgs/object8.png'
import newicon from 'assets/svgs/newicon.png'
import newicon2 from 'assets/svgs/newicon2.png'
import newicon3 from 'assets/svgs/newicon3.png'
import newicon4 from 'assets/svgs/newicon4.png'
import newicon5 from 'assets/svgs/newicon5.png'
import protection from 'assets/svgs/secnewpro.png'
import purpose from 'assets/svgs/secnewpur.png'

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
class Transform extends Component {
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
      document.body.classList.add('app-transform')
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



        <section id="top-trade" className='section section-landing'>
          <img className='img-back' src={next} alt='next' />
          <div className='text_img'>
            <div className='row py-4'>
              <div className='col-12 col-md-12 mb-12'>
                <div className='slidetext'>
                  <h3 className='mb-4'>Protection of Intellectual Property</h3>
                  <h2>Safeguard your work product, brand name, software and
inventions with trademarks, copyrights, patents
and  non-disclosure agreements. </h2>
                <div className="bg_next">
                <div className="newicon2"><img className='my-2 newicon' src={newicon} alt='newicon' /></div>
                <div className="newicon2"><img className='my-2 newicon8' src={newicon2} alt='newicon2' /></div>
                <div className="newicon2"><img className='my-2 newicon3' src={newicon3} alt='newicon3' /></div>
                <div className="newicon2"><img className='my-2 newicon4' src={newicon4} alt='newicon4' /></div>
                <div className="newicon2"><img className='my-2 newicon5' src={newicon5} alt='newicon5' /></div>
                </div>  
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
            <h3>What types of intellectual property are there?</h3>

          </div>
     
          <div className='container my-5 my-sm-5 next_sec'>
            <div className='row my-5'>
              <div className='col-12 col-md-6 left_new'>
                <div className='left text-xs-center'><img
                  className='my-2'
                  src={object1}
                  alt='object1'
                /></div>
                <div  className='right'>
                <h6 className='mb-2 htopics text-xs-center'>Trademarks</h6>
                <small className='mb-3 Ptopics text-xs-center'>A trademark is used to protect brand names and logos of goods and services. A trademark identifies the source of a product or service. With certain exceptions, a trademark can consist of any word, group of words, names, sounds or symbols. Click on the link below to explore whether your brand name is eligible for federal trademark registration.</small>
                <p className='mb-5 text-xs-center'> <Link to="/programs/trademark" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                  Get Started
                  </Link></p>
              </div>
              </div>
              <div className='col-12 col-md-6 left_new'>
                <div className='left text-xs-center'><img
                  className='my-2'
                  src={object2}
                  alt='object2'
                /></div>
                <div  className='right'>
                <h6 className='mb-2 htopics text-xs-center'>Copyrights</h6>
                <small className='mb-2 Ptopics text-xs-center'>A copyright is used to protect original works of authorship that are embodied in any tangible medium. "Works of authorship” include literature, music, drama, visual arts, sound recordings, movies and other audiovisual works, architectural works and computer programs. </small>
              </div>
              </div>
              <div className='col-12 col-md-6 left_new'>
                <div className='left text-xs-center'><img
                  className='my-2'
                  src={object3}
                  alt='object3'
                /></div>
                <div  className='right'>
                <h6 className='mb-2 htopics text-xs-center'>Trade Secrets</h6>
                <small className='mb-2 Ptopics text-xs-center'>A trade secret is information, such as a formula, method, or program that has economic value from not being generally known by other persons who could obtain value from its use. One way to protect your trade secrets is through the use of non-disclosure agreements. Click on the link below to prepare a non-disclosure agreement to help protect your trade secret.</small>
                <p className='mb-5 text-xs-center'> <Link to="/programs/nda" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                  Get Started
                  </Link></p>
              </div>
              </div>
              <div className='col-12 col-md-6 left_new'>
                <div className='left text-xs-center'><img
                  className='my-2'
                  src={object4}
                  alt='object4'
                /></div>
                <div className='right'>
                <h6 className='mb-2 htopics text-xs-center'>Patents</h6>
                <small className='mb-3 Ptopics text-xs-center'>A patent is used to protect inventions. Specifically, when available, a patent may be issued for any  "new and useful process, machine, manufacture, or composition of matter." (35 U.S.C. §101)</small>
              </div>
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
       
          <div className='container'>
          <h3 class="mb-4 hservenew">Why do I need to trademark my brand or logo?</h3>
            <div className='row py-4'>
              <div className='col-12 col-md-4 mb-4'>
                <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
                <h6 className='my-2'>Public Notice</h6>
                <small className='my-2'>
                Public notice of your claim of<br></br>
                ownership of the mark.
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
              <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
                <h6 className='my-2 mtt'>Ownership</h6>
                <small className='my-2'>
                A legal presumption of your ownership and exclusive right to use the mark nationwide.
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
              <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
                <h6 className='my-2'>Listed to USPTO</h6>
                <small className='my-2'>
                Listing in the USPTO’s online<br></br> databases
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
              <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
                <h6 className='my-2'>Federal Registration Symbol</h6>
                <small>
                The right to use the Federal Registration<br></br> Symbol.
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
              <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
                <h6 className='my-2 mtt'>Foreign Affairs</h6>
                <small>
                The use of the U.S registration in order to obtain registration in foreign countries.
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
              <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
                <h6 className='my-2'>Federal Court</h6>
                <small>
                The ability to bring  an action concerning the mark in federal court.
                </small>
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


        

   


        <section className='section section-topics-summary' id="topicnew">
          <div className='container my-2 my-sm-5'>
            <div className='row'>
           <h4 className="size_cont">Not all trademarks are eligible to be registered. We can help you explore whether your proposed mark is eligible. If your mark is eligible for Federal Registration, you can follow the link provided to file your trademark application on the USPTO website.</h4>
<div className='rightconew'>
                    <p className='pbutton mb-3 my-3'><Link to="/programs/trademark" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                  Get Started
                  </Link></p></div>
            </div>
          </div>
        </section>

        <section className='section section-topics-summary' id="lst_tr">
        <h3 className='mb-4 hserve'>Why do I need copyrights?</h3>
      <div className='container my-2 my-sm-5'>
     
        <div className='row'>

        <div className='col-sm-12 col-md-6 col-lm-6 left_sec'>
            <img className='iconback' src={object6} alt='vector' />

          </div>
          <div className=' col-sm-12 col-md-6 col-lm-6 textright'>
            <div className='text-center text-sm-left'>
             
              <small className='mb-5 pse'>
              A copyright is used to protect original works of authorship that are embodied in any tangible medium. "Works of authorship" include literature, music, drama, the visual arts, sound recordings, movies and other audiovisual works, architectural works and computer programs. Examples of tangible mediums include books, magazines, CDs, DVDs, other disks and cards.
              </small>
            </div>
          </div>
          </div>
          <div className='row'>
          <div className='col-sm-12 col-md-6 col-lm-6 right_sec mobile-on'>
            <img className='icon-back' src={object7} alt='vector' />
          </div>
          <div className=' col-sm-12 col-md-6 col-lm-6 textright'>
            <div className='text-center text-sm-left'>
              <small className='mb-5 pserve'>
              A copyright gives the copyright owner the exclusive right to make copies of the work, prepare derivative works, distribute copies to the public and perform or display the work publicly. A copyright protects only the expression of the idea, not the idea itself.
              </small>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lm-6 left_sec desktop-on'>
            <img className='icon-back' src={object7} alt='vector' />
          </div>
        </div>

        <div className='row'>
        <div className='col-sm-12 col-md-6 col-lm-6 left_sec'>
            <img className='iconback' src={object8} alt='vector' />
          </div>
          <div className=' col-sm-12 col-md-6 col-lm-6 textright'>
            <div className='text-center text-sm-left'>
              <small className='mb-5 pserve'>
              A copyright may be registered with the U.S. Copyright Office.
Although, it is not necessary to register a work to establish or create a copyright in the work, registration provides important benefits.
              </small>
            </div>
          </div>
          </div>
      </div>
    </section>
    <section className='section section-topics-summary' id="topicnew1">
          <div className='container my-2 my-sm-5'>
          <h3 class="mb-4 hservenew">What are the benefits of registering?</h3>
            <div className='row'>
            <div className='col-12 col-md-4 mb-4'>
              <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
 <small>
                Fulfill a requirement to file<br></br>
a copyright infringement lawsuit
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
              <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
               
                <small>
                Make it easier to be awarded attorneys’ fees and statutory damages from the infringer if you win a lawsuit. 
                </small>
              </div>
              <div className='col-12 col-md-4 mb-4'>
              <p className='star'><img className='my-2' src={object5} alt='object5' /></p>
                <small>
                Create a legal presumption of ownership of<br></br> the copyright.
                </small>
              </div>
            </div>
          </div>
        </section>
    <section className='section section-topics-summary' id="lst_new">
      <div className='container my-2 my-sm-5'>
     
        <div className='row'>

        <div className='col-sm-12 col-md-6 col-lm-6 left_sec'>
            <img className='iconback iimg' src={purpose} alt='vector' />

          </div>
          <div className=' col-sm-12 col-md-6 col-lm-6 textright'>
            <div className='text-center text-sm-left'>
             
              <small className='mb-5 pse'>
                <h4>What is the purpose of a non-disclosure agreement (NDA)?</h4>
                As a startup you have proprietary formulas, innovative ideas and exciting new products. Sometimes, such proprietary and sensitive information need to be disclosed to potential investors, creditors, partners or clients. A NDA can protect your proprietary and sensitive information from getting into the wrong hands (i.e. your competitors).
              </small>

            </div>
          </div>
          </div>
          <div className='row'>
          <div className='col-sm-12 col-md-6 col-lm-6 right_sec mobile-on'>
            <img className='icon-back iimg iimgpp' src={protection} alt='vector' />
          </div>
          <div className=' col-sm-12 col-md-6 col-lm-6 textright'>
            <div className='text-center text-sm-left'>
             
              <small className='mb-5 pserve'>
              <h4>What protections does a NDA provide?</h4>
              A NDA is legally binding contract between a person who holds a trade secret or other confidential information and a person to whom that trade secret or other confidential information is disclosed. The NDA contractually obligates such person to whom a disclosure is made to keep that information a secret. Should that person disclose your information to others, you'll have legal recourse to claim breach of contract and sue for damages. 
              <br />
              <br />
              Public disclosure of a new invention can also void your patent rights. A NDA can help keep your product or idea patentable. 
              </small>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lm-6 left_sec desktop-on'>
            <img className='icon-back iimgpp' src={protection} alt='vector' />
          </div>
        </div>
      </div>
    </section>
    <section className='section section-topics-summary' id="secnew">
    <div className='container my-2 my-sm-5'>
    <h5>Protect your trade secrets and other confidential information using a non-disclosure agreement.</h5>
    <p className='mb-5'> <Link to="/programs/nda" offset={HEADER_HEIGHT}
                  className='mb-1 button'>
                  Get Started
                  </Link></p>
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
                  className='buttonbg my-5 fwlow'
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
                <small> Legal Maven is not an attorney or a law firm.   We provide services for self-help at your specific direction</small>
                <small>Copyright © 2019 Legal Maven LLC, Santa Monica, California</small>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8 term'>
                <small><Link to="/Transform#top-trade" className='newtrade'>Legal Maven® </Link> is a registered trademark of Legal Maven LLC. All rights reserved.</small></div>
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

export default Transform

