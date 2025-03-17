import React from 'react'
import { Container,Table,Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

const Wishlist = () => {
  const {wishlist,addToCart, removeFromWishlist} = useCart()

  return (
    <Container className='mt-5 mb-5'>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? <p>Your wishlist is empty</p> : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>TZS {item.price.toLocalString()}</td>
                <td>
                  <Button variant='success' className='m-2' onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                  <Button variant='danger' onClick={() => removeFromWishlist(item.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default Wishlist
