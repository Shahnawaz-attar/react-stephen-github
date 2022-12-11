import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import useBooksContext from "../Hooks/use-books-context";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const { handleCreateBokks } = useBooksContext();

  const handlevalueChanges = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleCreateBokks(title);
    setTitle("");
  };

  return (
    <Row>
      <Col md={8} className="mx-auto">
        <Card className="shadow">
          <Card.Body>
            <Card.Title className="text-center">Create Book</Card.Title>
            <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Book Title"
                  value={title}
                  onChange={handlevalueChanges}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CreateBooks;
