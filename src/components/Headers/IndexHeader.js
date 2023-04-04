
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
              <h1 className="presentation-title">Clear Optics</h1>
              
            </div>
            <h2 className="presentation-subtitle text-center">
            When It Comes to Eye Wear, We Believe That Great Design, Quality Craftsmanship, and Style Are Values That All Our Frames Should Uphold. That's Why We Hand Pick Every Frame from International Brands That Meet These Core Values.
            </h2>
          </Container>
          
        </div>
        
        
        
      </div>
      

      
    </>
  );
}

export default IndexHeader;
