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
<div style={{height:90,backgroundColor:'red'}}></div>





<div  Col-md-12 style={{backgroundColor:'green',height:600}}>   <Col xs="3">.col-3</Col></div>



                <button onClick={this.submitHandler} >go to second page</button>






            </Container>




        );
    }
}



// const styles = {
//     container: {
      
  
//     }
// };
export default First;