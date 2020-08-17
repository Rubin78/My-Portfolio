// import React, { Component } from 'react';
// import { Container, Row, Col} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import hero1 from '../../assests/hero1.jpg';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// // import MenuIcon from 'reactstrap';

// import styles from '../First/First.module.css'
// // import car from './images/car.png'
// // import src from '*.bmp';

// // npm cache clean --force
// class First extends Component {

//      submitHandler=()=>{
//        this.props.history.push('/second','setsample');


//     }
//     render() {
//         return (
            

            
//             <Container fluid className={styles.containerBody} style={{  backgroundImage:`url(${hero1})`, }} >
// <div style={{height:90,}}>



// <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start"  color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" >
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Login</Button>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
// </div>





// <div  Col-sm-12  style={{ display:'flex',height:600,flex:1,
// alignItems:'space-between',justifyContent:'center',paddingLeft:40,backgroundColor:'green'}}>
// <div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start'}} > 
//     <div style={{color:'white',fontSize:50,textAlign:'center'}} >Rubin design +
//    <p>  innovation</p></div>
//     <button onClick={this.submitHandler} >go to second page</button></div>
// </div>



              






//             </Container>




//         );
//     }
// }



// // const styles = {
// //     container: {
      
  
// //     }
// // };
// export default First;







import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;