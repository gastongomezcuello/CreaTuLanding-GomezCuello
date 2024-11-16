import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <Container>
      <Col>
        <h1>{item.title}</h1>
        <section className="flex-container">
          <img src={item.image} alt={item.title} className="w-50  detail-img" />
          <div>
            <b className="big-price">${item.price}</b>
            <ItemCount item={item} />
          </div>
        </section>
        <p>{item.description}</p>
      </Col>
    </Container>
  );
};

export default ItemDetail;
