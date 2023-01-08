import React from 'react'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_TASKS } from '../store/GraphqlQueries'
import { MdPersonAdd } from 'react-icons/md'
import { IoEnter } from 'react-icons/io5'
import { Link } from 'gatsby-link'

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
            <th>Nb de Commentaires</th>

            {email && <th></th>}
            {email && <th></th>}
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
              <td>
                {task?.assignees.map((user) => (
                  <p>{user.user.name}</p>
                ))}
              </td>
              <td>{task?.comments.length ?? 0}</td>
              {email && (
                <td class="p-2">
                  <Link
                    to={`/add-assignee/${task.id}`}
                    className="btn btn-success"
                  >
                    <MdPersonAdd />
                  </Link>
                </td>
              )}
              {email && (
                <td class="p-2">
                  <Link
                    className="btn btn-primary"
                    to={`/detail-task/${task.id}`}
                  >
                    <IoEnter />
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      {email && (
        <a href="/add-task" className="btn btn-primary">
          Ajouter une tâche
        </a>
      )}
    </div>
  )
}

export default Tasks
