import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import NavBar from "../../layout/NavBar";

const AddProduct = () => {
  return (
    <div style={{ margin: "100px" }}>
      <NavBar />
      <Form className="m-5 p-5" style={{ border: "2px solid black" }}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" placeholder="Price" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Description" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" placeholder="Image" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Product Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Image URL" />
          </Form.Group>
        </Row>
        <Button variant="warning" type="submit" className="mr-5">
          Submit
        </Button>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
