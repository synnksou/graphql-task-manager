import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import Form from 'react-bootstrap/Form'
import { navigate } from 'gatsby'
import {
  CREATE_COMMENT,
  GET_ONE_TASK,
  UPDATE_TASK,
} from '../store/GraphqlQueries'
import Select from 'react-select'
import Button from 'react-bootstrap/Button'

const STATE = [
  { value: 'CREATED', label: 'CREATED' },
  { value: 'PROGRESS', label: 'PROGRESS' },
  { value: 'FINISHED', label: 'FINISHED' },
]

const STATE_ENUM = {
  CREATED: 'CREATED',
  PROGRESS: 'PROGRESS',
  FINISHED: 'FINISHED',
}

const Detail = ({ id }) => {
  const [selectedState, setSelectedState] = React.useState()
  const [content, setContent] = React.useState()
  const { data } = JSON.parse(localStorage.getItem('User.current'))
  const [updateOneTask] = useMutation(UPDATE_TASK)
  const [commentTaskUser] = useMutation(CREATE_COMMENT)
  const {
    loading,
    error,
    data: dataTask,
    refetch,
  } = useQuery(GET_ONE_TASK, {
    variables: { where: { id } },
  })
  const optionsDate = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const onSubmit = (e) => {
    e.preventDefault()

    commentTaskUser({
      variables: {
        userId: data.signIn.id,
        taskId: id,
        content: content,
      },
    })
      .then(() => {
        setContent('')
        refetch()
      })
      .catch((error) => {
        alert(error)
      })

    return false
  }

  const handleStateBlur = (e) => {
    e.preventDefault()

    updateOneTask({
      variables: {
        where: {
          id,
        },
        data: {
          state: {
            set: selectedState.value,
          },
        },
      },
    })
      .then(() => {
        alert('State updated')
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
      <h1>Detail Task</h1>
      <p> Titre : {dataTask.task.title}</p>
      <h3>State</h3>
      <Select
        options={STATE}
        onChange={(value) => setSelectedState(value)}
        defaultValue={{
          value: dataTask.task.state,
          label: dataTask.task.state,
        }}
        onBlur={handleStateBlur}
      />
      <h3>Date</h3>

      <p>{dataTask.task.date}</p>
      <h3>Description</h3>

      <p>{dataTask.task.description}</p>
      <h3>Assignees</h3>
      <p>{dataTask.task.assignees.map((user) => user.user.name)}</p>

      <h3>Commentaires</h3>

      <div class="card">
        <div class="card-body text-center">
          <h4 class="card-title">Latest Comments</h4>
        </div>
        <div class="comment-widgets">
          {dataTask.task.comments.map((comment) => (
            <div class="p-2 d-flex flex-row comment-row m-t-0 ">
              <div class="comment-text w-100">
                <h6 class="font-medium"> Utilisateur : {comment.owner.name}</h6>{' '}
                <span class="m-b-15 d-block">
                  Commentaires : {comment.content}
                </span>
                <div class="comment-footer">
                  <span
                    class="text-muted
                float-right"
                  >
                    {new Date(comment.createdAt).toLocaleDateString(
                      'FR-fr',
                      optionsDate,
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Ajouter un commentaire</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter comment"
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  )
}
export default Detail
