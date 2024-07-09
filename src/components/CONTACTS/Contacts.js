import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './contacts.css';

function Contacts() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="/img/Ryan Jacobs.png" />
            <Card.Body>
              <Card.Title>Ryan Jacobs</Card.Title>
              <Card.Text>
                ryan@example.com
                <br />
                555-342-6897
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="/img/Isabel More.png" />
            <Card.Body>
              <Card.Title>Isabel More</Card.Title>
              <Card.Text>
                Isabel@example.com
                <br />
                163-543-6754
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="/img/Ryan Jacobs.png" />
            <Card.Body>
              <Card.Title>Ryan Jacobs</Card.Title>
              <Card.Text>
                ryan@example.com
                <br />
                555-342-6897
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="/img/Isabel More.png" />
            <Card.Body>
              <Card.Title>Isabel More</Card.Title>
              <Card.Text>
                Isabel@example.com
                <br />
                163-543-6754
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
