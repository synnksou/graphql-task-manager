import React from 'react'

import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

const Tasks = () => (
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
        <tr key="task-5a03c3ee-f307-47e7-9039-bf9077c66b2b">
          <td>Sample Task 1</td>
          <td>
            <Badge bg="secondary">DRAFT</Badge>
          </td>
          <td>&mdash;</td>
          <td>&mdash;</td>
        </tr>
        <tr key="task-1e6cfab9-549f-46c0-91dd-88dc34a7293a">
          <td>Sample Task 2</td>
          <td>
            <Badge bg="warning">PENDING</Badge>
          </td>
          <td>&mdash;</td>
          <td>&mdash;</td>
        </tr>
        <tr key="task-5a511001-08d1-4317-9c89-c5f39484b851">
          <td>Sample Task 3</td>
          <td>
            <Badge bg="success">DONE</Badge>
          </td>
          <td>&mdash;</td>
          <td>Efficom</td>
        </tr>
        <tr key="task-55508152-b524-4feb-933c-65b0c6245bf3">
          <td>Sample Task 4</td>
          <td>
            <Badge bg="danger">PENDING</Badge>
          </td>
          <td>{new Date('2022-12-25').toLocaleString()}</td>
          <td>Efficom</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default Tasks
