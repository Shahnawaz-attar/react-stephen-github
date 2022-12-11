import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import EditBooks from "./EditBooks";
import useBooksContext from "../Hooks/use-books-context";
const ShowBooks = ({ book }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { handleBookDelete } = useBooksContext();

  const handleEditSubmit = () => {
    setIsEdit(false);
  };

  const editBook = () => {
    setIsEdit(true);
  };

  let content = <Card.Title>{book.title}</Card.Title>;
  if (isEdit) {
    content = <EditBooks book={book} onSubmit={handleEditSubmit} />;
  }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <Card.Body>
        {content}
        {!isEdit && (
          <Button variant="primary" className="btn-sm" onClick={editBook}>
            edit
          </Button>
        )}
        {!isEdit && (
          <Button
            variant="danger"
            className="btn-sm mx-2"
            onClick={() => {
              handleBookDelete(book.id);
            }}
          >
            delete
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ShowBooks;
