import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material'
import React , {useEffect , useState} from 'react';
import { getUser , deleteUser } from '../service/api';
import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
  width: 90%;
  margin : 50px auto 0 auto;
`

const Thead = styled(TableRow)`
 background: #000;
 & > th {
  color:#fff;
  font-size: 22px;
 }`
 const Tbody = styled(TableRow)`
 & > td {
  font-size: 18px;
 }`

const AllUser = () => {
  const[users , setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  });

  const getUsersDetails =async () =>{
    let response = await getUser();
    setUsers(response.data)
  }

  const deleteUserData =async (id) => {
   await deleteUser(id)
  }

  return (
    <div>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>

          </Thead>
        </TableHead>
        <TableBody>
          {
            users.map(user =>( 
              <Tbody>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`} >Edit</Button>
                  <Button variant='contained' color='secondary' onClick={() => deleteUserData(user.id)}>Delete</Button>

                </TableCell>

              </Tbody>
            ))
          }
        </TableBody>

      </StyledTable>
    </div>
  )
}

export default AllUser
