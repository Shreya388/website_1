import React from "react";
import { Col, Container, Row, ProgressBar} from "react-bootstrap";
import a from "./img/team/1.jpg";
import b from "./img/team/2.jpg";
import c from "./img/team/3.jpg";
import "./ourTeam.css";

const Team = (props) => {
    return (
       
        <Col>
        <div>
            
            <img className="card-img teamImg" src={props.img} alt={props.alt} />
            <h5>{props.name}</h5>
            <p>{props.summ}</p>
            
            </div>
        </Col>
    )
}

const OurTeam = () => {
    return ( 
        <>
        <div className="ourTeam">
            <h1>Our Team</h1><br />
            <Container>
                
            <Row>
                    <Team img={a} name="Kate Smith" summ="" alt="firstimg" />
                    <Team img={b} name="Jason Statham" summ="" alt ="secondimg" />
                    <Team img={c} name="David" summ="" alt="thirdimg" />
            </Row>
            </Container>
        </div>

        <div className="progress_sec">
            <Container>
                <h1>Progress</h1><br />
           
            <ProgressBar className="progBar" variant="primary" now={30} /><br />
            
            <ProgressBar className="progBar" variant="primary" now={46} /><br />
               
            
           
            <ProgressBar className="progBar" variant="primary" now={90} />
            </Container>
        </div>
        </>
     );
}
 
export default OurTeam;