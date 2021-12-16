import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Service = ({ home }) => {
  const { img, name, detail, _id, price } = home;
  return (
      <Card className="m-2 col-12 bg-info" style={{ width: '21rem' }}>
      <Image style={{width: '300px', height: '300px'}} src={img} roundedCircle className="mx-auto" />
        <Card.Body className="text-white">
          <Card.Title> {name}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <NavLink to={`/order/${_id}`} className="btn btn-primary">BUY Now</NavLink>

        </Card.Body>
      </Card>
   

  );
};

export default Service;