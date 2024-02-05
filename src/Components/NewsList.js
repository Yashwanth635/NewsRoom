// import React, { useState } from 'react';
// import { Card, Col, Container, Row } from 'react-bootstrap';
// import useNewsData from '../hooks/useNewsData';
// import CustomPagination from './CustomPagination';

// const NewsList = (props) => {
//   const { category, searchTerm } = props;
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 3;

//   const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

//   const { newsData, loading, error } = useNewsData(category, searchTerm);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   const totalArticles = newsData?.length;
//   const totalPages = Math.ceil(totalArticles / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const currentArticles = newsData.slice(startIndex, endIndex);

//   return (
//     <Container>
//       <Row>
//         {currentArticles?.map((article) => (
//           <Col xs={12} md={6} lg={4} key={article.url} className="mb-4">
//             <Card style={{ height: '100%' }}>
//               <Card.Img src={article.image} variant="top" style={{ height: '200px', objectFit: 'cover' }} />
//               <Card.Body className="d-flex flex-column justify-content-between">
//                 <div>
//                   <Card.Title>{article.title}</Card.Title>
//                   <Card.Text>{article.description}</Card.Text>
//                 </div>
//                 <Card.Link href={article.url}>Read More</Card.Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <CustomPagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={onPageChange}
//       />
//     </Container>
//   );
// };

// export default NewsList;
import React, { useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import useNewsData from '../hooks/useNewsData';
import CustomPagination from './CustomPagination';
import { connect } from 'react-redux';
import HeartComponent from './HeartComponent';

import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useNewsData from '../hooks/useNewsData';
import CustomPagination from './CustomPagination';

const NewsList = (props) => {

  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData?.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <Container>
      <Row>
        {currentArticles?.map((article) => (
          <Col xs={12} md={6} lg={4} key={article.url} className="mb-4">
            <Card style={{ height: '100%' }}>
              <Card.Img src={article.image} variant="top" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </div>
                <Row>
                  <Col xs={6} md={6} lg={3}>
          <Col xs={12} md={6} lg={4} key={article.url} className="mb-4">
            <Card style={{ height: '100%' }}>
              <Card.Img src={article.image} variant="top" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </div>
                <Card.Link href={article.url}>Read More</Card.Link>
                <HeartComponent article={article} />
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  );
};


export default NewsList;









