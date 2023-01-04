import React from 'react'
import { useMutation } from '@apollo/react-hooks'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import User from 'store/User'
import { LOGIN_USER_MUTATION } from 'store/GraphqlQueries'
import { navigate } from 'gatsby'

const SignIn = () => {
  const [email, setEmail] = React.useState(User.get('new', 'email'))
  const [password, setPassword] = React.useState()
  const [signIn] = useMutation(LOGIN_USER_MUTATION)

  const onInputChange = (e) => {
    const value = e.target.value

    switch (e.target.name) {
      case 'email':
        if (value == '') {
          User.set('new', { email: undefined })
        }

        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    signIn({ variables: { email: email, password: password } })
      .then((payload) => {
        User.set('current', payload)
        navigate('/')
      })
      .catch((error) => {
        alert(error)
      })

    return false
  }

  return (
    <div className="col">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={onInputChange}
            name="email"
            defaultValue={email}
          />
          <Form.Text className="text-muted">
            {"We'll never share your email with anyone else."}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={onInputChange}
            name="password"
            defaultValue={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default SignIn
