import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import findImage from 'utils/find-image'

import User from 'store/User'

const AppNavbar = () => {
  const navbarLogo = () => {
    return findImage('logo.svg').src
  }

  const currentUser = User.get('current')

  return (
    <Navbar id="main-navbar" expand="lg" variant="light">
      <Container fluid>
        <Navbar.Brand className="cursor-pointer mx-auto" href="/">
          <img src={navbarLogo()} alt="TaskManager" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {currentUser && (
            <Navbar.Text>
              {'Signed in as: '}
              <strong>
                <a title="LogOut" href="/logout/">
                  {currentUser.name}
                </a>
              </strong>
            </Navbar.Text>
          )}
          {!currentUser && (
            <>
              <Navbar.Text>
                <a href="/sign-in/">SignIn</a>
              </Navbar.Text>
              <Navbar.Text className="mx-2">{'|'}</Navbar.Text>
              <Navbar.Text>
                <a href="/sign-up/">SignUp</a>
              </Navbar.Text>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
