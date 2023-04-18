import './NavbarComp.scss'
import "bootstrap/js/src/collapse.js";
// import Component1 from './Pages/Component1'



export default function NavbarComp(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Random</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/component1">Component 1 </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/component2">Component 2</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Component 3 (incoming)</a>
            </li>
            </ul>
        </div>
        </nav>

        
        </>
    );

    
}



// import React, { Component } from 'react'
// import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

// export default class NavbarComp extends Component {
//   render() {
//     return (
//         <>
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#features">Features</Nav.Link>
//               <Nav.Link href="#pricing">Pricing</Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar>
//         <br />
//         <Navbar bg="primary" variant="dark">
//           <Container>
//             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#features">Features</Nav.Link>
//               <Nav.Link href="#pricing">Pricing</Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar>
  
//         <br />
//         <Navbar bg="light" variant="light">
//           <Container>
//             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#features">Features</Nav.Link>
//               <Nav.Link href="#pricing">Pricing</Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar>
//       </>
//     )
//   }
// }

