import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const {cart, removeFromCart} = useCart()

  return (
    <Container className='mt-5 mb-5'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
       <Table striped bordered hover>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price.toLocalString()}</td>
                    <td>{item.qty}</td>
                    <td>
                        <Button variant='danger' onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </td>
                </tr>
            ))}
        </tbody>
       </Table> 
      )}
    </Container>
  )
}

export default Cart
