import React from "react";
import { useState } from "react";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";

const initalProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "High-quality smartphone",
    price: 299999,
    image: "../../../public/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "Powerful laptop for work and gaming",
    price: 1000000,
    image: "../../../public/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphone",
    description: "Noise-canceling headphone",
    price: 499999,
    image: "../../../public/images/headphone.jpg",
  },
];

const ManageProducts = () => {
  const [products, setProducts] = useState(initalProducts);
  const [show, setShow] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const addProduct = () => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    handleClose();
  };

  return (
    <Container className="mt-5 mb-5">
      <h2>Manage Products</h2>
      <Button onClick={handleShow} className="mb-3">
        Add Product
      </Button>
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width="50"
                  height="50"
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>TZS {product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button className="mt-3" onClick={addProduct}>
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ManageProducts;
