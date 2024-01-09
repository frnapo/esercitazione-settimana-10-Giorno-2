import { Card } from "react-bootstrap";

const SingleBook = ({ book, onSelectBook, isSelected }) => {
  const { asin, img, title } = book;

  return (
    <Card onClick={() => onSelectBook(asin)} style={{ border: isSelected ? "3px solid red" : "none" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
