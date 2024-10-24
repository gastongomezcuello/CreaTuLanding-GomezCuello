import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Col className="h-100">
      <Card className="m-1 h-100">
        <Card.Img variant="top" src={item.image} className="reduce-img" />
        <Card.Body>
          <Card.Title className="font-size">{item.title}</Card.Title>
          <Card.Text className="font-size">${item.price}</Card.Text>
          <Button as={Link} to={`/product/${item.id}`} variant="primary">
            Ver Mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
