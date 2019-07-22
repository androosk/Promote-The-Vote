import React, { Fragment, useContext } from 'react'
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Wrapper from "../Wrapper/Wrapper";
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "../../context/auth/authContext"
import $ from 'jquery';
// import PostContext from "../../context/post/postContext"

const TopNav = () => {
  const authContext = useContext(AuthContext)
  console.log(authContext)
  // const postContext = useContext(PostContext)
  const { logout, user, isAuthenticated } = authContext

  const onLogout = () => {
    logout()
  }

  const toggle = e => {
    e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  }

  const authLinks = (
    <Fragment>
      <li>
        Hello { user && user.firstname }
      </li>
      <li>
        <a onClick={ onLogout } href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <li  className="nav-item">
        <Link className="nav-link" to="/Register">Register</Link>
      </li>
      <li  className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
    </Fragment>
  )

  return (
    <div>
      <Wrapper>
        <Container fluid="true">
        <Row>
          <Col>
            <h1>Promote The Vote</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <nav className="navbar navbar-expand-lg border-bottom">
              <button className="btn btn-danger" onClick={ toggle } id="menu-toggle">
                MENU
              </button>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {isAuthenticated ? authLinks : guestLinks }
                  {/* <li className="nav-item active">
                    <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">Login</Link>
                  </li> */}
                </ul>
              </div>
            </nav>
          </Col>
        </Row>
        </Container>
      </Wrapper>
    </div>
  )
}

export default TopNav

