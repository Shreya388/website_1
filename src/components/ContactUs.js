import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactUs.css";


const Contact = () => {
    return (
        <Container>
        <div style={{ paddingTop: "120pt", paddingBottom: "120pt", background: "white"}}>
        <Row>
        <Col>
        <div className="sec_1">
        <h1>Let's Connect</h1>
        </div>
        </Col>
        <Col>
        <div className="sec_2">
            <Container>
                
                <Form.Control className="textBox" placeholder="Your name" /><br />
                <Form.Control className="textBox"  placeholder="email" /><br />
                <Form.Control className="textBox" placeholder="tell us something" as="textarea" />
                <br /><Button className="send_btn" variant="dark">Send</Button>
            </Container>
        </div>
        </Col>
        </Row>
        
        </div>
        </Container>
    )
}

export default Contact;