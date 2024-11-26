import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {

  // get the admin surname from the local storage 
  // we will retrieve the admin username from the local storage 
   const admin_surname = localStorage.getItem("surname")
   

   const handleLogoutFunction = ()=>{
      // we will clear the local storage to logout the authenticated user 
      localStorage.removeItem("surname")
   }


  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">AfyaMedic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/addlabtests">Add Labtests</Nav.Link>
            <Nav.Link href="/viewlabtests">View Labtests</Nav.Link>
            <Nav.Link href="/addnurses">Add Nurses</Nav.Link>
            <Nav.Link href="/viewnurses">View Nurses</Nav.Link>
            <Nav.Link href="/viewbookings">View Bookings</Nav.Link>
            <Nav.Link href="">Welcome, { admin_surname }</Nav.Link>
            <Nav.Link href="" onClick={handleLogoutFunction}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
