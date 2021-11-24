import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./style.css";

function Sections(props){
    return (
        <Col>
            <h4>{props.header}</h4>
            <p>{props.para}</p>
        </Col>
    )   
}

const AboutUs = () => {
    return ( 
        <div style={{ paddingTop: "170pt", paddingBottom: "170pt", background: "rgb(84 53 181)", color:"#eeeeee"}}>
            <h1 className="">How We Work</h1><br />
            <Container>
            <Row>
            <Sections header="" para="There are many variations of passages of Lorem Ipsum available, but the "/>            
            <Sections header="" para="is simply dummy text of the printing and typesetting industry. Lorem Ipsum" />
            <Sections header="" para="when an unknown printer took a galley ofmajority have suffered alteration in some form, by injected humour "/>            
            <Sections header="" para="type and scrambled it to make a type specimen book. It has survived not only five centuries" />
            <Sections header="" para=" has been the industry's standard dummy text ever since the 1500s"/>            
            </Row>
            </Container>
        </div>
     );
}
 
export default AboutUs;