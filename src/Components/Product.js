
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
          setFilteredProducts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      
      if (category === 'all') {
        setFilteredProducts(products);
      } else {
        let filtered;
        
        if (category.toLowerCase() === 'men') {
          filtered = products.filter((product) => product.category.toLowerCase() === 'men\'s clothing');
        } else {
          filtered = products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
        }
  
        setFilteredProducts(filtered);
      }
    };
  
    return (
      <Container>
        <ButtonGroup className="mb-2" size='lg'>
          <Button
            variant={selectedCategory === 'all' ? 'dark' : 'light'}
            onClick={() => handleCategoryChange('all')}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === 'women\'s clothing' ? 'dark' : 'light'}
            onClick={() => handleCategoryChange('women\'s clothing')}
          >
            Women's collection
          </Button>
          <Button
            variant={selectedCategory === 'men' ? 'dark' : 'light'}
            onClick={() => handleCategoryChange('men')}
          >
            Men's collection
          </Button>
          <Button
            variant={selectedCategory === 'jewelery' ? 'dark' : 'light'}
            onClick={() => handleCategoryChange('jewelery')}
          >
            Jewelery
          </Button>
          <Button
            variant={selectedCategory === 'electronics' ? 'dark' : 'light'}
            onClick={() => handleCategoryChange('electronics')}
          >
            electronics
          </Button>
        </ButtonGroup>
  
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id} md={4}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default Product;
  