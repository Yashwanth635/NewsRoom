import { useState } from "react";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";

import NewsList from "./Components/NewsList.js";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4">
          News App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleCategoryClick("world")}>
                  World
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleCategoryClick("business")}
                >
                  Business
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleCategoryClick("technology")}
                >
                  Technology
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategoryClick("sports")}>
                  Sports
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleCategoryClick("entertainment")}
                >
                  Entertainment
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Form onSubmit={handleSearch} className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              name="search"
            />

            <Button variant="outline-primary" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleCategoryClick("world")}>
                World
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("business")}>
                Business
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("technology")}>
                Technology
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("sports")}>
                Sports
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("entertainment")}>
                Entertainment
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={9}>
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </>  
          

  );
}

export default App;

// import { useState } from "react";
// import {
//   Row,
//   Col,
//   Navbar,
//   Nav,
//   Form,
//   FormControl,
//   Button,
//   Dropdown,
//   Container,
// } from "react-bootstrap";

// import NewsList from "./Components/NewsList.js";

// function App() {
//   const [category, setCategory] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleCategoryClick = (cetegory) => {
//     setCategory(cetegory);
//     setSearchTerm("");
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setCategory("");
//     setSearchTerm(event.target.search.value);
//   };

//   return (
//     <>
//     <Navbar bg="light" expand="lg" className="mb-4">
//       <Container>
//         <Navbar.Brand href="/" className="fw-bold fs-4">
//           News App
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbar-nav" />

//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto">
//             <Dropdown>
//               <Dropdown.Toggle variant="outline-primary">
//                 Categories
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => handleCategoryClick("world")}>
//                   World
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   onClick={() => handleCategoryClick("business")}
//                 >
//                   Business
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   onClick={() => handleCategoryClick("technology")}
//                 >
//                   Technology
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategoryClick("sports")}>
//                   Sports
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   onClick={() => handleCategoryClick("entertainment")}
//                 >
//                   Entertainment
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Nav>

//           <Form onSubmit={handleSearch} className="d-flex">
//             <FormControl
//               type="text"
//               placeholder="Search"
//               className="me-2"
//               name="search"
//             />

//             <Button variant="outline-primary" type="submit">
//               Search
//             </Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <Container>
//         <Row>
//           <Col xs={12} md={3}>
//             <h5>Categories</h5>
//             <Nav className="flex-column">
//               <Nav.Link onClick={() => handleCategoryClick("world")}>
//                 World
//               </Nav.Link>
//               <Nav.Link onClick={() => handleCategoryClick("business")}>
//                 Business
//               </Nav.Link>
//               <Nav.Link onClick={() => handleCategoryClick("technology")}>
//                 Technology
//               </Nav.Link>
//               <Nav.Link onClick={() => handleCategoryClick("sports")}>
//                 Sports
//               </Nav.Link>
//               <Nav.Link onClick={() => handleCategoryClick("entertainment")}>
//                 Entertainment
//               </Nav.Link>
//             </Nav>
//           </Col>

//           <Col xs={12} md={9}>
//             <NewsList category={category} searchTerm={searchTerm} />
//           </Col>
      
//         </Row>
//       </Container>
//     </>  
          

//   );
// }

// export default App;

//  import React from "react";
// import {
//   Row,
//   Col,
//   Navbar,
//   Nav,
//   Form,
//   FormControl,
//   Button,
//   Dropdown,
//   Container,
// } from "react-bootstrap";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import NewsList from "./Components/NewsList.js";
// import FavoritesPage from "./Components/FavoritesPage.js";  // Import the FavoritesPage component

// function App() {
//   const [category, setCategory] = React.useState("");
//   const [searchTerm, setSearchTerm] = React.useState("");

//   const handleCategoryClick = (category) => {
//     setCategory(category);
//     setSearchTerm("");
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     setCategory("");
//     setSearchTerm(event.target.search.value);
//   };

//   return (
//     <Router>
//       <>
//         <Navbar bg="light" expand="lg" className="mb-4">
//           <Container>
//             <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
//               News App
//             </Navbar.Brand>

//             <Navbar.Toggle aria-controls="navbar-nav" />

//             <Navbar.Collapse id="navbar-nav">
//               <Nav className="me-auto">
//                 <Dropdown>
//                   <Dropdown.Toggle variant="outline-primary">
//                     Categories
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item onClick={() => handleCategoryClick("world")}>
//                       World
//                     </Dropdown.Item>
//                     <Dropdown.Item
//                       onClick={() => handleCategoryClick("business")}
//                     >
//                       Business
//                     </Dropdown.Item>
//                     <Dropdown.Item
//                       onClick={() => handleCategoryClick("technology")}
//                     >
//                       Technology
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleCategoryClick("sports")}>
//                       Sports
//                     </Dropdown.Item>
//                     <Dropdown.Item
//                       onClick={() => handleCategoryClick("entertainment")}
//                     >
//                       Entertainment
//                     </Dropdown.Item>
//                     {/* Link to FavoritesPage under Categories */}
//                     <Dropdown.Item as={Link} to="/favorites">
//                       Favorites
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </Nav>

//               <Form onSubmit={handleSearch} className="d-flex">
//                 <FormControl
//                   type="text"
//                   placeholder="Search"
//                   className="me-2"
//                   name="search"
//                 />
//                 <Button variant="outline-primary" type="submit">
//                   Search
//                 </Button>
//               </Form>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//         <Container>
//           <Row>
//             <Col xs={12} md={3}>
//               <h5>Categories</h5>
//               <Nav className="flex-column">
//                 <Nav.Link as={Link} to="/world">
//                   World
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/business">
//                   Business
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/technology">
//                   Technology
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/sports">
//                   Sports
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/entertainment">
//                   Entertainment
//                 </Nav.Link>
//               </Nav>
//             </Col>

//             <Col xs={12} md={9}>
//               <Routes>
//                 <Route
//                   path="/:category"
//                   element={<NewsList searchTerm={searchTerm} />}
//                 />
//                 <Route path="/favorites" element={<FavoritesPage />} />
//               </Routes>
//             </Col>
//           </Row>
//         </Container>
//       </>
//     </Router>
//   );
// }

// export default App;






