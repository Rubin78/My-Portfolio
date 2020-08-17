import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero1 from '../../assests/hero1.jpg';

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
<div style={{height:90,}}>wwww</div>





<div  Col-sm-12 style={{height:600,alignItems:'center',justifyContent:'center'}}>

    <h1 style={{color:'white'}} >Rubin</h1>
    <button onClick={this.submitHandler} >go to second page</button>
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