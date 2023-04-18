import './NavbarComp.scss'
import "bootstrap/js/src/collapse.js";
// import Component1 from './Pages/Component1'



export default function NavbarComp(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Random</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="/component1">Component 1 </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/component2">Component 2</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Component 3 (incoming)</a>
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

