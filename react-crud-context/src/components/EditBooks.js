import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useBooksContext from "../Hooks/use-books-context";
const EditBooks = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { handleUpdateBooks } = useBooksContext();
  const handlevalueChanges = (e) => {
    setTitle(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    handleUpdateBooks(book.id, title);
  };

  return (
    <Form onSubmit={handleEditSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" value={title} onChange={handlevalueChanges} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditBooks;
