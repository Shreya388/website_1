import React from "react";
import Topbar from "./Navbar";
import "./style.css"
import "./Cover.css";
import { Container } from "react-bootstrap";

const headText = "Explore New Ideas Everyday";

const Back = () => {
    return (
        <div>
            
        <div className="cover">
            <div className="cover_overlay">
            <Topbar />
                <Container>
                
                    <div style={{ marginTop:"200pt"}}>
                    
                    <h1 className="display-3 Heading">{headText}</h1>
                    <p style={{color:'#c7c7c7'}}>Interdum et malesuada fames ac ante ipsum primis in faucibus.<br /> Proin at nisl sagittis, ornare ipsum non,</p>
                    
                    </div>
                    
                </Container>
            </div>
        </div>

      
        {/*Navbar section End*/}
      </div>    
    )
}

export default Back;