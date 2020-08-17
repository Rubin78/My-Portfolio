import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import car from '../../assests/car.jpeg';

import styles from '../First/First.module.css'
// import car from './images/car.png'
// import src from '*.bmp';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
        // //     <Container fluid className={styles.containerBody} style={{  backgroundImage:`url(${car})`,     
        // // }} >

        //         <button onClick={this.submitHandler} >go to second page</button>






        //     </Container>


<Grid sm={12} item>
        <Typography variant="h2" className={classes.signUpKopprAccount}>
          Sign in to for your Koppr Corporate account
        </Typography>
        <div className={classes.formWrapper}>
          <form
            className={classes.signInForm}
            noValidate
            autoComplete="off"
            onSubmit={this.signInCall}
          >
            <TextField
              id="outlined-required"
              placeholder="Email"
              size="small" />
</form>
</div>
</Grid>
        );
    }
}



// const styles = {
//     container: {
      
  
//     }
// };
export default First;