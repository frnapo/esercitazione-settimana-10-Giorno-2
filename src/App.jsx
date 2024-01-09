import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import fantasy from "./data/fantasy.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const App = () => {
  const [selectedAsin, setSelectedAsin] = useState(null);

  const selectBook = (asin) => {
    setSelectedAsin(asin);
  };

  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Row>
          <Col xs={8}>
            <BookList books={fantasy} onSelectBook={selectBook} selectedAsin={selectedAsin} />
          </Col>
          <Col xs={4}>
            <CommentArea asin={selectedAsin} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default App;
