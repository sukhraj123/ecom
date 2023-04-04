
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bgg.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Buy One, Give One</h1>
              
            </div>
            <h2 className="presentation-subtitle text-center">
            As Strong Belivers In Giving We Will Donate A Pair If You Purchase One. Donations Will Be Made To Local Shelters In Vancouver, BC.
            </h2>
          </Container>
          
        </div>
        
        
        
      </div>
      

      
    </>
  );
}

export default IndexHeader;
