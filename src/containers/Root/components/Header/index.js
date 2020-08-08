import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classname'
import { app } from 'configs'
const NavLink = ({ to, title, selected, onClick }) => (
  <div
    className={cn('nav__item', 'nav__link', { selected: selected })}
    onClick={onClick}
  >
    <Link to={to}>{title}</Link>
  </div>
)

const NavItem = ({ selected, children }) => (
  <div className={cn('nav__item', 'nav__link', { selected: selected })}>
    {children}
  </div>
)

// const NavIcon = ({ icon, onClick }) => (
//   <div className="nav__item nav__icon" onClick={onClick}>
//     <i className={icon}></i>
//   </div>
// )

const NavButton = ({ title, onClick, solid }) => (
  <div
    className={cn('nav__item', 'nav__button', { solid: solid })}
    onClick={onClick}
  >
    {title}
  </div>
)

const NavDropDown = ({ children }) => <ul className='dropdown'>{children}</ul>

const NavDropDownLink = ({ to, title }) => (
  <li className='dropdown-item'>
    <Link to={to}>{title}</Link>
  </li>
)

const NavDropDownItem = ({ children }) => (
  <li className='dropdown-item'>{children}</li>
)

const navs = [
  {
    title: 'Legal Topics',
    to: '/#topics'
  },
  {
    title: 'Legal Forms',
    to: '/#topicnew'
  },
  {
    title: 'Contact',
    to: '/#contact'
  }
]

class Header extends Component {
  state = {
    collapse: true,
    showMenu: false
  }

  componentDidMount () {
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize)
  }

  componentWillReceiveProps ({ pathname }) {
    if (this.props.pathname !== pathname) {
      this.setState({ showMenu: false })
      document.body.classList.remove('header-menu-opened')
    }
  }

  onWindowResize = () => {
    const collapseWidth = 992
    if (this.state.collapse) {
      if (window.innerWidth >= collapseWidth) this.setState({ collapse: false })
    } else {
      if (window.innerWidth < collapseWidth) {
        this.setState({ collapse: true, showMenu: false })
        document.body.classList.remove('header-menu-opened')
      }
    }
  }

  toggleMenu = () => {
    this.setState(
      prevState => ({
        showMenu: !prevState.showMenu
      }),
      () => {
        document.body.classList.toggle(
          'header-menu-opened',
          this.state.showMenu
        )
      }
    )
  }

  render () {
    const { pathname, changeRoute, signed, signOut } = this.props
    const { collapse, showMenu } = this.state

    return (
      <header className='header'>
	  <div className='container-fluid'>
        <div className='header-content'>
          {collapse && (
            <div className='ml-2'>
              <NavButton title='Menu' onClick={this.toggleMenu} />
            </div>
          )}
          <Link to='/' className='logo mx-0 mx-md-4 logo_title'>
            {app.logoText}{' '}<em>.</em>
            <small className='d-block d-sm-inline d-lg-block d-xl-inline'>
              FOR STARTUPS
            </small>
          </Link>
          <div
            className={cn('navs', { collapse: collapse }, { hide: !showMenu })}
          >
            {navs.map(({ title, to }) => (
              <NavLink
                key={to}
                to={to}
                title={title}
                selected={pathname.startsWith(to)}
                onClick={this.toggleMenu}
              />
            ))}

            {!collapse && <span className='mx-3'>&nbsp;</span>}

            {signed && (
              <NavItem>
                <a>
                  <i className='fas fa-user' />
                  &nbsp;&nbsp;Account&nbsp;&nbsp;
                  <i className='fas fa-caret-down' />
                </a>

                <NavDropDown>
                  <NavDropDownLink title='Profile' to='/account/profile' />
                  <NavDropDownLink title='Billing' to='/account/billing' />
                  <NavDropDownLink title='Documents' to='/account/documents' />
                  <NavDropDownLink title='Activity' to='/account/activity' />
                  <NavDropDownItem>
                    <a onClick={signOut}>Logout</a>
                  </NavDropDownItem>
                </NavDropDown>
              </NavItem>
            )}

            {/* {!signed && !collapse && (
              <NavButton
                title='Sign In'
                onClick={() => changeRoute('/auth/signin')}
              />
            )}
            {!signed && collapse && (
              <NavLink
                title='Sign In'
                to='/auth/signin'
                selected={pathname.startsWith('/auth/signin')}
              />
            )}
            {!signed && !collapse && (
              <NavButton
                title='Sign Up'
                solid
                onClick={() => changeRoute('/auth/signup')}
              />
            )}
            {!signed && collapse && (
              <NavLink
                title='Sign Up'
                to='/auth/signup'
                selected={pathname.startsWith('/auth/signup')}
              />
            )} */}

            {!signed ? (
              <div className='auth-buttons'>
                <NavButton
                  title='Sign In'
                  onClick={() => changeRoute('/auth/signin')}
                />
                <NavButton
                  title='Sign Up'
                  solid
                  onClick={() => changeRoute('/auth/signup')}
                />
              </div>
            ) : null}
          </div>
          {collapse && (
            <div className='mr-2'>
              {signed ? (
                <NavButton title='Logout' onClick={signOut} />
              ) : (
                <NavButton
                  title='Sign In'
                  onClick={() => changeRoute('/auth/signin')}
                />
              )}
            </div>
          )}
        </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  pathname: PropTypes.string,
  signed: PropTypes.bool.isRequired
}

export default Header
