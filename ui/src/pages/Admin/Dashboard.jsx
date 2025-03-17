import React from 'react'
import { Container,Row,Col,Nav } from 'react-bootstrap'
import {Link,Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className='bg-dark text-white min-hv-100 p-3'>
        <h4>Admin Dashboard</h4>
        <Nav className="flex-column">
          <Nav.Link as={Link} to='/admin/manage-products' className='text-white'>Manage Products</Nav.Link>
          <Nav.Link as={Link} to='/admin/manage-orders' className='text-white'>Manage Orders</Nav.Link>
          <Nav.Link as={Link} to='/admin/manage-users' className='text-white'>Manage Users</Nav.Link>
        </Nav>
        </Col>
        <Col md={10} className='p-4'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
