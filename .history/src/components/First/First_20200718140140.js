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
<div style={{height:90,}}>



    
</div>





<div  Col-sm-12  style={{ display:'flex',height:600,flex:1,
alignItems:'space-between',justifyContent:'center',padding:20}}>
<div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start'}} > 
    <div style={{color:'white',fontSize:50,textAlign:'center',paddingLeft:60}} >Rubin design +
   <p>  innovation</p></div>
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