import React from 'react'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_TASKS } from '../store/GraphqlQueries'

const STATE = [
  { value: 'CREATED', label: 'Created', variant: 'primary' },
  { value: 'INPROGRESS', label: 'In Progress', variant: 'warning' },
  { value: 'DONE', label: 'Done', variant: 'success' },
]

const Tasks = () => {
  const { loading, error, data } = useQuery(GET_ALL_TASKS)
  const dataUser = JSON.parse(localStorage.getItem('User.current'))
  const email = dataUser?.data?.signIn?.email

  if (loading) return '...'
  if (error) return <p>ERROR</p>
  if (!data) return <p>Not found</p>

  return (
    <div className="col">
      <Table variant="light" striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>State</th>
            <th>Due Date</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {data.tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>
                <Badge variant={'primary'}>{task.state}</Badge>
              </td>
              <td>{task.date}</td>
              <td>{task.assignee}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {email && (
        <a href="/add-task" className="btn btn-primary">
          <button type="button" class="btn btn-primary">
            Ajouter une tâche
          </button>
        </a>
      )}
    </div>
  )
}

export default Tasks
