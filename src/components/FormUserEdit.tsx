import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';



interface EditDetailsProps {
  open: boolean;
  onClose: () => void;
}

const FormUserEdit:React.FC<EditDetailsProps> = ({open,onClose}) => {

 
  return (
    <>
      
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="fatherName"
            label="Father's Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="motherName"
            label="Mother's Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="surname"
            label="Surname"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="dob"
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            margin="dense"
            id="mahallu"
            label="Mahallu"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="place"
            label="Place"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="district"
            label="District"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="state"
            label="State"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="problem"
            label="Problem"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="solutions"
            label="Solutions"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Add</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default FormUserEdit