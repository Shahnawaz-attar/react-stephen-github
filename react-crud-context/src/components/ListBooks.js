import React from "react";
import ShowBooks from "./ShowBooks";
import useBooksContext from "../Hooks/use-books-context";
import { Col, Row } from "react-bootstrap";

const ListBooks = () => {
  const { books } = useBooksContext();

  const renderBooks = books.map((book, index) => {
    return (
      <Col md={4} key={book.id} className="mb-2">
        <ShowBooks book={book} />
      </Col>
    );
  });

  return <Row className="my-5">{renderBooks}</Row>;
};

export default ListBooks;
