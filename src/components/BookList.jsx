import { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books.map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook
                book={b}
                onSelectBook={this.props.onSelectBook}
                isSelected={b.asin === this.props.selectedAsin}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
