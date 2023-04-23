// import './NavbarComp.scss'
// import "bootstrap/js/src/collapse.js";
// // import Component1 from './Pages/Component1'



// export default function NavbarComp(){
//     return(
//         <>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">Random</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//             <li className="nav-item active">
//                 <a className="nav-link" href="/component1">Component 1 </a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="/component2">Component 2</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#">Component 3 (incoming)</a>
//             </li>
//             </ul>
//         </div>
//         </nav>

        
//         </>
//     );

    
// }



import './NavbarComp.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Random name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/component1">Component1</Nav.Link>
            <Nav.Link href="/component2">Component2</Nav.Link>
            <Nav.Link href="/component2">Component3(incoming)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;