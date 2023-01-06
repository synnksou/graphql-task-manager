import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import Form from 'react-bootstrap/Form'
import { navigate } from 'gatsby'
import {
  CREATE_ASSIGNEE,
  CREATE_TASK_MUTATION,
  GET_ALL_USERS,
} from '../store/GraphqlQueries'
import Select from 'react-select'
import Button from 'react-bootstrap/Button'

const AddAssignee = ({ id }) => {
  const [selectedValue, setSelectedValue] = React.useState()

  const [usersToAssignee, setUsersToAssignee] = React.useState([])
  const { data } = JSON.parse(localStorage.getItem('User.current'))
  const [assigneeTask] = useMutation(CREATE_ASSIGNEE)
  const { loading, error, data: dataUsers } = useQuery(GET_ALL_USERS)

  React.useEffect(() => {
    if (dataUsers) {
      setUsersToAssignee(
        dataUsers.users.map((user) => {
          return {
            value: user.id,
            label: user.name,
          }
        }),
      )
    }
  }, [dataUsers])

  const onSubmit = (e) => {
    e.preventDefault()

    assigneeTask({
      variables: {
        userId: selectedValue.value,
        taskId: id,
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

  if (loading) return '...'
  if (error) return <p>ERROR</p>
  if (!data) return <p>Not found</p>

  return (
    <div className="col">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>User to Assignee</Form.Label>
          <Select
            options={usersToAssignee}
            onChange={(value) => setSelectedValue(value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Assignée
        </Button>
      </Form>
    </div>
  )
}
export default AddAssignee
