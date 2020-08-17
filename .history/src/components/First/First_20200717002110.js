import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero1 from '../../assests/hero1.jpg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../First/First.module.css'
// import car from './images/car.png'
// import src from '*.bmp';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            
            <Container fluid className={styles.containerBody} style={{  backgroundImage:`url(${hero1})`, }} >
<div style={{height:90,}}>
<AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
</div>





<div  Col-sm-12  style={{ display:'flex',height:600,width:500,flex:1,alignItems:'space-between',justifyContent:'center',backgroundColor:'red',padding:20}}>
<div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'center',alignItems:'flex-end'}} > 
    <h1 style={{color:'white',fontSize:50,textAlign:'center',}} >Rubin design + innovation</h1>
    <button onClick={this.submitHandler} >go to second page</button></div>
</div>



              






            </Container>




        );
    }
}



// const styles = {
//     container: {
      
  
//     }
// };
export default First;