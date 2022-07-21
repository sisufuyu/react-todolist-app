import React, { useState } from 'react'
import { Button, Container } from '@material-ui/core'
import NewToDoModel from './components/NewToDoModel'
import TodoItem from './components/TodoItem'
import LabelList from './components/LabelList'
import { v1 as uuid } from 'uuid'

function App() {
  const [modelOpen, setModelOpen] = useState(false)
  const [todolist, setTodoList] = useState([])
  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')
  const [id, setId] = useState('')
  const [status, setStatus] = useState(0)
  const [errorMessage, setErrorMessage] = useState({})

  const resetItem = () => {
    setTitle('')
    setDeadline('')
    setStatus(0)
    setId('')
    setErrorMessage({})
  }

  const openModel = () => setModelOpen(true)

  const closeModel = () => {
    setModelOpen(false)
    resetItem()
  }

  const changeTitle = (event) => {
    const value = event.target.value
    let error = { title: '' }
    if (!value) {
      error.title = 'Title can\'t be empty'
    } 
    setErrorMessage({ ...errorMessage, ...error })
    setTitle(value)
  }

  const changeDeadline = (event) => {
    const value = event.target.value
    let error = { deadline: '' }
    if (!value) {
      error.deadline = 'Deadline can\'t be empty'
    }
    setErrorMessage({ ...errorMessage, ...error })
    setDeadline(value)
  }

  const changeStatus = (event) => {
    const value = parseInt(event.target.value)
    let error = { status: '' }
    if (value !== 0 && value !== 1 && value !== 2) {
      error.status = 'Status is not valid!'
    }
    setErrorMessage({ ...errorMessage, ...error })
    setStatus(value)
  }

  const validate = () => {
    let error = {}
    let valid = true
    if (!title) {
      error.title = 'Title can\'t be empty'
      valid = false
    }
    if (!deadline) {
      error.deadline = 'Deadline can\'t be empty'
      valid = false
    }
    if (status !== 0 && status !== 1 && status !== 2) {
      error.status = 'Status is not valid!'
      valid = false
    }
    setErrorMessage(error)
    return valid
  }

  const addItem = () => {
    const valid = validate()
    if (valid) { 
      // if click item in the list, then change the content of existing item
      if (id) {
        const newTodolist = todolist.map(item => {
          if (item.id === id) {
            return {
              title,
              deadline,
              status,
              id
            }
          } else {
            return item
          }
        })
        setTodoList(newTodolist)
      } else {
        // if click add new item button, then add new item
        const item = {
          title,
          deadline,
          status,
          id: uuid()
        }
        setTodoList(todolist.concat(item))
      }
      closeModel()
    }
  }

  const hanldeClickItem = (item) => {
    setTitle(item.title)
    setDeadline(item.deadline)
    setStatus(item.status)
    setId(item.id)
    openModel()
  }

  return (
    <Container>
      <Button
        variant="contained"
        color="primary" 
        type="button" 
        onClick={openModel}
        style={{margin: '10px 0'}}
      >
        Add a new todo
      </Button>
      <NewToDoModel 
        modelOpen={modelOpen}
        closeModel={closeModel}
        addItem={addItem}
        title={title}
        deadline={deadline}
        status={status}
        changeTitle={changeTitle}
        changeDeadline={changeDeadline}
        changeStatus={changeStatus}
        errorMessage={errorMessage}
      />
      {
        todolist.map(item => {
          return <TodoItem key={item.id} item={item} hanldeClickItem={() => hanldeClickItem(item)}/>
        })
      }
      <LabelList />
    </Container>
  )
}

export default App
