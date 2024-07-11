import React, { useState } from 'react';
import {API, graphqlOperation, Storage} from '@aws-amplify';

import {createContact} from '../../graphql/mutations';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuid } from 'uuid';

function Contacts() {
  const [contactData, setContactData] = useState({ name: "", email: "", contact: "" });
  const [profilePic, setProfilePic] = useState("");

  const addNewContact = async()  => {
    const {name, email, contact} = contactData;

    Storage.configure({region: "ap-southeast-1"});
    const {key} = await Storage.put(`${uuid()}.png`,profilePic, {contentType: 'image/png'});

    const newContact ={
      id: uuid(),
      name,
      email,
      contact,
      profilePicPath:key
    };

    await API.graphql(graphqlOperation(createContact, {input: newContact}));
  };

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
      </Row>
      <Row className='px-4 my-5'>
        <Col onSubmit={3}>
        <h2>Add New Contact</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Contact name" 
                    value={contactData.name}
                    onChange={evt => setContactData({...contactData, name:evt.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Contact email" 
                    value={contactData.email} 
                    onChange={evt => setContactData({...contactData, email:evt.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="tel" placeholder="Contact number" 
                    value={contactData.contact} 
                    onChange={evt => setContactData({...contactData, contact:evt.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProfilePicture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" accept="image/png" 
                    onChange={evt => setProfilePic(evt.target.files[0])}/>
            </Form.Group>

            <Button variant="primary" type="button" onClick={addNewContact}>Add Contact&gt;&gt;</Button>&nbsp;
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
