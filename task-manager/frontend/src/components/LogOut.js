import React from 'react'

import Button from 'react-bootstrap/Button'

import { navigate } from 'gatsby'

import User from 'store/User'

const LogOut = () => {
  const logout = () => {
    User.unset('current')

    navigate('/')
  }

  const onClick = (e) => {
    e.preventDefault()

    logout()
  }

  return (
    <div className="col text-center">
      <h1>Are your sure ?</h1>
      <p className="text-muted">{"You'll be redirected to the home page"}</p>
      <Button variant="danger" href="#logout" onClick={onClick}>
        Sure I want to logout
      </Button>
    </div>
  )
}
export default LogOut
