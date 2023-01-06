import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import User from 'store/User'

export const getClient = () => {
  return new ApolloClient({
    uri: process.env.GATSBY_API_URL,
    cache: new InMemoryCache({
      possibleTypes: {},
    }),
    credentials: 'include',
    headers: {
      user: User.get('account', 'id') || null,
    },
  })
}

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    name
  }
`

export const GET_CURRENT_USER = gql`
  query getCurrentUser($id: ID!) {
    getOneUser(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const LOGIN_USER_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      name
      email
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password_digest: $password, name: $name) {
      id
      name
      email
      password_digest
    }
  }
`

export const GET_ALL_TASKS = gql`
  query tasks {
    tasks {
      id
      state
      description
      title
      userId
      date
      assignees {
        user {
          name
        }
      }
    }
  }
`

export const CREATE_TASK_MUTATION = gql`
  mutation createTask($title: String!, $description: String!, $email: String!) {
    createTask(title: $title, description: $description, email: $email) {
      title
      description
    }
  }
`

export const GET_ALL_USERS = gql`
  query users {
    users {
      id
      name
      email
    }
  }
`

export const CREATE_ASSIGNEE = gql`
  mutation assigneeTask($taskId: String!, $userId: String!) {
    assigneeTask(taskId: $taskId, userId: $userId) {
      taskId
      userId
    }
  }
`
