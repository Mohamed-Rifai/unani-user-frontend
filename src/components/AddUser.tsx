import React,{useRef} from 'react'
import {Dialog,DialogTitle,TextField,DialogContent,DialogActions,Button} from '@mui/material'
import axios from '../axios'
import { toast } from 'react-toastify'




interface AddUserProps {
    open : boolean,
    onClose: () => void
}

const AddUser:React.FC<AddUserProps> =  ({open,onClose}) => {


    const nameRef = useRef<HTMLInputElement>(null)
    const fNameRef = useRef<HTMLInputElement>(null)
    const mNameRef = useRef<HTMLInputElement>(null)
    const surNameRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)
    const mahalluRef = useRef<HTMLInputElement>(null)
    const placeRef = useRef<HTMLInputElement>(null)
    const districtRef = useRef<HTMLInputElement>(null)
    const stateRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const probRef = useRef<HTMLInputElement>(null)
    const soluRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)



const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


    const formData = {

      name: nameRef.current?.value ,
      fatherName: fNameRef.current?.value || '',
      motherName: mNameRef.current?.value || '',
      surname: surNameRef.current?.value || '',
      date: dateRef.current?.value || '',
      mahallu: mahalluRef.current?.value || '',
      place: placeRef.current?.value || '',
      district: districtRef.current?.value || '',
      state: stateRef.current?.value || '',
      phone: phoneRef.current?.value || '',
      problem: probRef.current?.value || '',
      solutions: soluRef.current?.value || '',
      description: descriptionRef.current?.value || '',
     
    
    }

    try {

   const response =await axios.post('/patient/add-patient',formData)


   const message = response.data?.message


   toast.success(message)
   


    

   onClose()

    } catch (err) {
      
console.log(err);

    }
    
   
    
    
    
    

}

  return (
    <>
       <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add New Patiant</DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            required
            inputRef={nameRef}
          />
          <TextField
            margin="dense"
            id="fatherName"
            label="Father's Name"
            type="text"
            fullWidth
            variant="standard"
            required
            inputRef={fNameRef}
            
          />
          <TextField
            margin="dense"
            id="motherName"
            label="Mother's Name"
            type="text"
            fullWidth
            variant="standard"
            inputRef={mNameRef}
          />
          <TextField
            margin="dense"
            id="surname"
            label="Surname"
            type="text"
            fullWidth
            variant="standard"
            inputRef={surNameRef}
          />
          <TextField
            margin="dense"
            id="date"
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            inputRef={dateRef}
          />
          <TextField
            margin="dense"
            id="mahallu"
            label="Mahallu"
            type="text"
            fullWidth
            variant="standard"
            inputRef={mahalluRef}
          />
          <TextField
            margin="dense"
            id="place"
            label="Place"
            type="text"
            fullWidth
            variant="standard"
            inputRef={placeRef}
          />
          <TextField
            margin="dense"
            id="district"
            label="District"
            type="text"
            fullWidth
            variant="standard"
            inputRef={districtRef}
          />
          <TextField
            margin="dense"
            id="state"
            label="State"
            type="text"
            fullWidth
            variant="standard"
            inputRef={stateRef}
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
            inputRef={phoneRef}
          />
          <TextField
            margin="dense"
            id="problem"
            label="Problem"
            type="text"
            fullWidth
            variant="standard"
            inputRef={probRef}
          />
          <TextField
            margin="dense"
            id="solutions"
            label="Solutions"
            type="text"
            fullWidth
            variant="standard"
            inputRef={soluRef}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            inputRef={descriptionRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' >Add</Button>
        </DialogActions>
        </form>
      </Dialog> 
    </>
  )
}

export default AddUser
