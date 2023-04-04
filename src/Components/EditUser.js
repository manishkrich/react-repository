import React , {useState , useEffect} from 'react';

import { FormGroup , FormControl , InputLabel , Input , Typography , Button , styled}  from '@mui/material';
import { getUsers , editUser} from '../service/api';
import {useNavigate , useParams} from 'react-router-dom';


const Container = styled(FormGroup)`
   width : 50%;
   margin : 5% auto 0 auto;
   & > div {
    margin-top : 20px;
   }
`
const initialValues = {
   name: '',
   userName : '' ,
   email : '' ,
   phone : '' ,
}

const EditUser = () => {
    const[user , setUser] = useState(initialValues);
    const navigate = useNavigate();
    const {id} =useParams();

    useEffect(() => {
        getUserData();
    } )

    const getUserData = async() => {
        let  response = await getUsers(id);
        setUser(response.data)
    }

    const onValueChange =(e) => {
      setUser({...user , [e.target.name]:e.target.value})
    }

    const addUserDetails =async () => {
      await editUser(user , id);
      navigate('/all');
    }
  return (
    <>
        <Container>
            <Typography variant='h4'>Edit User</Typography>
          <FormControl>
             <InputLabel>Name</InputLabel>
             <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
          </FormControl>
          <FormControl>
             <InputLabel>UserName</InputLabel>
             <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
          </FormControl>
          <FormControl>
             <InputLabel>Email</InputLabel>
             <Input onChange={(e) => onValueChange(e)} name="email"value={user.email} />
          </FormControl>
          <FormControl>
             <InputLabel>Phone</InputLabel>
             <Input onChange={(e) => onValueChange(e) } name="phone" value={user.phone}/>
          </FormControl>
          <FormControl>
             <Button variant='contained' onClick={() => addUserDetails()}>Edit
              User</Button>
          </FormControl>
        </Container>
    </>
  )
}

export default EditUser
