import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';


const About = () => {
    return (
        <div className="home-body py-5">
           <Container>
 
          <h2 className="text-center text-white mb-4">
            WELCOME TO CREATIVE HOUSE
          </h2>
    
        <Row>
          <Col md className="pe-3">
        
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
              With over 2 million bookable vacation rentals, Creative connects homeowners with families and vacationers looking for something more than a hotel for their trip. The Creative community offers families an array of rental property types such as condos, cabins, lake rentals, beach houses, and more. Discover properties in destinations that everyone dreams of visiting. All it takes is a quick Creative property search to securely book your next condo, cabin, or house anywhere in the world. 
              </p>
              <p className="text-muted">
              It is observed that no visa procedure is absolutely hazard free. but can be alleviated to a great extant. Thus considering  the reality we meticulously follow service safety protocols. Our skilled and devoted workforce along with state of the art equipment has constructed a infrastructure to cater the client needs of Our services.
              </p>
           
          </Col>
          <Col md className="pe-3">
           
              <h5 className="text-white">What are the difference?</h5>
              <p className="text-muted">
              Creative House is One of the best House sell site in Bangladesh. We are a 75 bedded multi-disciplinary tertiary- care our customer, situated at Mirpur Dhaka. It is establish to provide house sell service for lower middle class people of all over the country based on our customer.
              </p>
              <h5 className="text-white">Why choose Creative House?</h5>
              <p className="text-muted">
              In Creative House we do believe in best service which comes as an extra facility not only from our Consultants but also from all staffs around. Together we try to create confidence inside our services minds and make them feel special, respected and cared.
              </p>
           
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            
              <h5 className="text-white">Sign in and don’t miss anything!</h5>
              <p className="text-muted">
              We will give Service & May Allah Cure.
              </p>
           
          </Col>
          <Col md className="d-flex align-items-center">
          
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
           
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default About;