import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    const { book, onSelectBook, isSelected } = this.props;

    return (
      <Card onClick={() => onSelectBook(book.asin)} style={{ border: isSelected ? "3px solid red" : "none" }}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
