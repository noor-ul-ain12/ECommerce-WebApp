import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Topsellers() {
  return (
    <Card style={{ width: '18rem'}}>
    <Card.Body>
      <Card.Title>Peace of mind </Card.Title>
      <Card.Text>
        A one-stop platform for all your fashion needs, hassle-free<br/>
        Buy with peace of mind 
      </Card.Text>
      <Button variant="light">Buy Now </Button>
    </Card.Body>
  </Card>
  

  );
}


export default Topsellers;