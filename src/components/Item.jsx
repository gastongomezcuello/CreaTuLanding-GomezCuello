import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Item = ({ item }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
            <br />
            {item.price}
          </Card.Text>
          <Button variant="primary">{item.id}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
