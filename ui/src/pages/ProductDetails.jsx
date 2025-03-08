import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import products from '../assets/products'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    const product = products.find((p) => p.id === parseInt(id))
    const {addToCart, addToWishlist} = useCart()

    if (!product) return <h2>Product not found</h2>

  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col md={6}>
            <Image src={product.image} fluid />
        </Col>
        <Col md={6}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>TZS {product.price.toLocaleString()}</h4>
            <Button variant='primary' className='me-2' onClick={() => addToCart(product)}>Add to Cart</Button>
            <Button variant='outline-danger' onClick={() => addToWishlist(product)}>Add to Wishlist</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails
