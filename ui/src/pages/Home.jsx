import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import products from '../assets/products'

const Home = () => {
  return (
    <Container className='mt-5 mb-5'>
      <h2>Latest Products</h2>
      <Row>
        {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3} className='mb-4'>
                <Card>
                    <Card.Img variant='top' src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>TZS {product.price.toLocaleString()}</Card.Text>
                        <Link to={`/product/${product.id}`}>
                            <Button variant='primary'>View Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home
