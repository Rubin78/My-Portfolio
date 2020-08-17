// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// class Second extends Component {
//     render() {
//         console.log(this.props);
//         return (



            
//             <div>
//                 <Link to="/third" >Go to the third page</Link>

//         <div>{this.props.location.state}</div>
//             </div>
//         );
//     }
// }

// export default Second;




// // import React, { useState } from 'react';
// // import { Link } from "react-router-dom";
// // import {
// //   Collapse,
// //   Navbar,
// //   NavbarToggler,
// //   NavbarBrand,
// //   Nav,
// //   NavItem,
// //   NavLink,
// //   UncontrolledDropdown,
// //   DropdownToggle,
// //   DropdownMenu,
// //   DropdownItem,
// //   NavbarText
// // } from 'reactstrap';

// // const Example = (props) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggle = () => setIsOpen(!isOpen);

// //   return (
// //     // <div>
// //     //   <Navbar color="light" light expand="md">
// //     //     <NavbarBrand href="/">reactstrap</NavbarBrand>
// //     //     <NavbarToggler onClick={toggle} />
// //     //     <Collapse isOpen={isOpen} navbar>
// //     //       <Nav className="mr-auto" navbar>
// //     //         <NavItem>
// //     //           <NavLink href="/components/">Components</NavLink>
// //     //         </NavItem>
// //     //         <NavItem>
// //     //           <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
// //     //         </NavItem>
// //     //         <UncontrolledDropdown nav inNavbar>
// //     //           <DropdownToggle nav caret>
// //     //             Options
// //     //           </DropdownToggle>
// //     //           <DropdownMenu right>
// //     //             <DropdownItem>
// //     //               Option 1
// //     //             </DropdownItem>
// //     //             <DropdownItem>
// //     //               Option 2
// //     //             </DropdownItem>
// //     //             <DropdownItem divider />
// //     //             <DropdownItem>
// //     //               Reset
// //     //             </DropdownItem>
// //     //           </DropdownMenu>
// //     //         </UncontrolledDropdown>
// //     //       </Nav>
// //     //       <NavbarText>Simple Text</NavbarText>
// //     //     </Collapse>
// //     //   </Navbar>
// //     // </div>





// //   );
// // }

// // export default second;








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
    <div style={{backgroundColor:'red',height:90, display:'flex'}}>
      <Navbar color="red" light expand="md"  style={{display:'flex',flex:0.8,}} >
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          {/* <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
            {/* <UncontrolledDropdown nav inNavbar>
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
            </UncontrolledDropdown> */}
          {/* </Nav> */}
          <NavbarText>Simple Text</NavbarText>
          <NavbarText>Simple Text</NavbarText>
          <NavbarText>Simple Text</NavbarText>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;