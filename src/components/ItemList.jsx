import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
