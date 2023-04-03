import React from 'react';
import { AppBar   , styled} from '@mui/material';

import {NavLink} from 'react-router-dom'

const Header = styled(AppBar)`
background:#111111;
display : block;
align-items : justify;
height : 80px;
margin-top : auto
`
const Tabs = styled(NavLink)`
font-size:20px;
margin-right : 20px;
display : inline;
color : white;
text-decoration : none;

`
const Navbar = () => {
  return (
    <Header position='static'>
        <Tabs to="/">Navbar</Tabs>
        <Tabs to="/add">Add User</Tabs>
        <Tabs to="/all">See User</Tabs>
    </Header>
  )
}

export default Navbar
