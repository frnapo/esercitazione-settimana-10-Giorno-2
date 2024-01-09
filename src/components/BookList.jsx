import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";

const BookList = ({ books, onSelectBook, selectedAsin }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        {books.map((b) => (
          <Col xs={12} md={4} key={b.asin}>
            <SingleBook book={b} onSelectBook={onSelectBook} isSelected={b.asin === selectedAsin} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookList;
