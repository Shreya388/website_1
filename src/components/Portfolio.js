import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Portfolio.css";
import a from "./img/a.jpg";
import b from "./img/b.jpg";
import c from "./img/c.jpg";
import d from "./img/d.jpg";
import e from "./img/e.jpg";


function Cards(props){
    return (
            <Col>
            
            <Card className="card_style">
                <img className="card-img" src={props.image} alt="images" />
                
            </Card>
            
            </Col>
    )
}

const Portfolio = () => {
    return (
        <div className="Portfolio">
            <h1 style={{color: "rgb(55 21 139)"}}>Portfolio</h1><br /><br />
        <Container>
            <Row>
                <Cards title="Technology" para="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium" image={a} />
                <Cards title="Dashboard" para="totam rem aperiam, eaque ipsa quae ab illo inventore veritatis" image={b} />
                <Cards title="e commerce" para="et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas" image={c} />
            </Row><br />
            <Row>
                <Cards image={d} />
                <Cards image={d} />
                <Cards image={e} />
            </Row>
        </Container>
        </div> 
     );
}
 
export default Portfolio;