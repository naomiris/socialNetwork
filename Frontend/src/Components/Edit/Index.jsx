import React, {useState} from 'react';
import Account from './Account';
import EditProfile from './EditProfile';
import SideBar from './SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactHover from 'react-hover';
// import { FormControl, FormLabel } from 'react-bootstrap';
import {GlobalStyle, Container2, SidebarContainer, 
      
      } from './Styled';

function Edit() {

  const [gstate, setgstate] = useState(true);
         
    return (
         
    <>
      
      <NavBar/>  
        <Container2>
           <SidebarContainer>
              <SideBar setgstate={setgstate}/>
           </SidebarContainer>
           {gstate? <EditProfile/> : <Account/>}
     </Container2>
      </>

    );} 

export default Edit;

