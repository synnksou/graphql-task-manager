import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { navigate } from 'gatsby'
import { CREATE_TASK_MUTATION } from '../store/GraphqlQueries'

const AddTask = () => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const { data } = JSON.parse(localStorage.getItem('User.current'))
  const email = data?.signIn?.email
  const [createTask] = useMutation(CREATE_TASK_MUTATION)

  const onInputChange = (e) => {
    const value = e.target.value

    switch (e.target.name) {
      case 'title':
        setTitle(value)
        break
      case 'description':
        setDescription(value)
        break
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log({ title, description, email })
    createTask({
      variables: {
        title: title,
        description: description,
        email: email,
      },
    })
      .then(() => {
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
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Titre</Form.Label>
          <Form.Control
            placeholder="Entre Titre"
            onChange={onInputChange}
            name="title"
            defaultValue={title}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>description</Form.Label>
          <Form.Control
            placeholder="Entre Description"
            onChange={onInputChange}
            name="description"
            defaultValue={description}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default AddTask
