import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom' 

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  console.log('favorites',favorites)
  // const fav= [
  //   {
  //     "title": "Penelope Cruz, Javier Bardem and Scarlett Johansson at Picasso's house",
  //     "description": "woody allen It remains a prime practical example of the eternal debate between work and artist.this sexual abuse allegations children Mia Farrow This means",
  //     "content": "woody allen It remains a prime practical example of the eternal debate between work and artist.this sexual abuse allegations children Mia Farrow This means that many people will be disgusted by Allen’s character when watching his films, while others ... [2133 chars]",
  //     "url": "https://sparkchronicles.com/penelope-cruz-javier-bardem-and-scarlett-johansson-at-picassos-house/",
  //     "image": "https://www.mundodeportivo.com/files/og_thumbnail/uploads/2018/07/04/60e7cf21c9a2a.jpeg",
  //     "publishedAt": "2024-02-03T05:00:00Z",
  //     "source": {
  //       "name": "Spark Chronicles",
  //       "url": "https://sparkchronicles.com"
  //     }
  //   },
  //   {
  //     "title": "How to activate \"Pink Mode\" in the latest version of WhatsApp",
  //     "description": "WhatsApp New features that are very useful for users have been added in the latest version. For example, Now you can use over 20 new emojis in conversations",
  //     "content": "WhatsApp New features that are very useful for users have been added in the latest version. For example, Now you can use over 20 new emojis in conversations or react to messages your friends leave you. These include mushroom icons, lime fruit, “yes” ... [1481 chars]",
  //     "url": "https://sparkchronicles.com/how-to-activate-pink-mode-in-the-latest-version-of-whatsapp-sports-games/",
  //     "image": "https://depor.com/resizer/Psn8vSBVC3a16RnBDxVTOxJDcok=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GXPOFJDDF5HFHAXI2D24OCSRUY.jpg",
  //     "publishedAt": "2024-02-02T20:49:46Z",
  //     "source": {
  //       "name": "Spark Chronicles",
  //       "url": "https://sparkchronicles.com"
  //     }
  //   }
  // ]


  return (
    <div>
      <h2>Favorites</h2>
      <Row>
        {favorites?.map((article) => (
          <Col xs={12} md={6} lg={4} key={article.url} className="mb-4">
            <Card style={{ height: '100%' }}>
              <Card.Img src={article.image} variant="top" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </div>
                <Row>
                  <Col xs={12} md={6} lg={4}>
                <Card.Link href={article.url}>Read More</Card.Link>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    
  );
};

export default FavoritesPage;