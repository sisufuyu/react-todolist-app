import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from '@material-ui/core'
import { statusList } from '../util'

const NewToDoModel = ({ 
  modelOpen,
  closeModel,
  title,
  deadline,
  status,
  changeTitle,
  changeDeadline,
  changeStatus,
  addItem,
  errorMessage
}) => {
  return (
    <Dialog open={modelOpen} onClose={closeModel} fullWidth={true}>
      <DialogTitle>Add a new to do</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          required
          style={{marginTop: '1rem'}}
          name="title"
          placeholder="Title"
          label="Title"
          variant="outlined"
          value={title}
          onChange={changeTitle}
          error={errorMessage.title ? true : false}
          helperText={errorMessage.title}
        />
        <TextField
          fullWidth
          required
          style={{marginTop: '1rem'}}
          name="deadline"
          placeholder="Deadline"
          label="Deadline"
          variant="outlined"
          value={deadline}
          onChange={changeDeadline}
          error={errorMessage.deadline ? true : false}
          helperText={errorMessage.deadline}
        />
        <TextField
          fullWidth
          style={{marginTop: '1rem'}}
          select
          label="Select Status"
          value={status}
          onChange={changeStatus}
          error={errorMessage.status ? true : false}
          helperText={errorMessage.status}
        >
          {statusList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closeModel}>Cancel</Button>
        <Button variant="contained" onClick={addItem} color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default NewToDoModel