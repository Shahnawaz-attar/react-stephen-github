import "./App.css";
import CreateBooks from "./components/CreateBooks";
import ListBooks from "./components/ListBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import useBooksContext from "./Hooks/use-books-context";
import { useEffect } from "react";

function App() {
  const { handleFetch } = useBooksContext();
  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <Container>
      <ListBooks />
      <CreateBooks />
    </Container>
  );
}

export default App;
