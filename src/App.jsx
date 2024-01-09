import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import fantasy from "./data/fantasy.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    selectedAsin: null,
  };

  selectBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row>
            <Col xs={8}>
              <BookList books={fantasy} onSelectBook={this.selectBook} selectedAsin={this.state.selectedAsin} />
            </Col>
            <Col xs={4}>
              <CommentArea asin={this.state.selectedAsin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
