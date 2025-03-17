import React from 'react'
import { useState } from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('')
  const handlePayment = (e) => {
    e.preventDefault()
    console.log('Selected Payment Method:',paymentMethod)
    navigate('/profile')
  }

  return (
    <Container className='mt-5 mb-5'>
      <h2>Payment</h2>
      <Form onSubmit={handlePayment}>
        <Form.Group>
          <Form.Check 
          type='radio'
          label='Credit/Debit Card'
          name='paymentMethod'
          value='card'
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
          />
          <Form.Check
          type='radio'
          label='PayPal'
          name='paymentMethod'
          value='paypal'
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
          />
          <Form.Check
          type='radio'
          label='Cash on Delivery'
          name='paymentMethod'
          value='cod'
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
          />
          <Button variant='success' type='submit' className='mt-4'>Confirm Payment</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Payment
