import React from 'react'
import Link from 'next/link'
import Modal from 'react-responsive-modal'
import { delete_cookie } from '../../../libs/cookieHelper'

// Components
import Login from '../login/Login'
import Router from 'next/router'

const logout = () => {
  delete_cookie('token')
  Router.push({
    pathname: '/',
  })
}

function Header(props) {
  const [open, setOpen] = React.useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white ">
      <img
        src="/static/img/web.svg"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt=""
      />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item  ml-4">
            <Link href="/">
              <a className="nav-link" href="#">
                <h3>EXPLORE</h3>
              </a>
            </Link>
          </li>
          <li className="nav-item  ml-4">
            <Link href="/projects">
              <a className="nav-link" href="#">
                <h3>PROJECTS</h3>
              </a>
            </Link>
          </li>
          <li className="nav-item  ml-4">
            <Link href="/">
              <a className="nav-link" href="#">
                <h3>PEOPLE</h3>
              </a>
            </Link>
          </li>
          <li className="nav-item  ml-4">
            <Link href="/">
              <a className="nav-link" href="#">
                <h3>US</h3>
              </a>
            </Link>
          </li>
          <li className="nav-item   ml-4">
            {props.user && !props.user.isLogin ? (
              <a className="nav-link" href="#" onClick={() => setOpen(true)}>
                <h3>LOGIN</h3>
              </a>
            ) : (
              <a className="nav-link" href="#" onClick={() => logout()}>
                <h3>LOGOUT</h3>
              </a>
            )}
          </li>
        </ul>
        <form action="H01.htm" className="form-inline ml-4 my-2 my-lg-0">
          <input
            className="form-control mr-sm-4"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} focusTrapped>
        <Login dispatch={props.dispatch} />
      </Modal>
    </nav>
  )
}

export default Header
