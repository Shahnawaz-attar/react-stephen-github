import axios from "axios";
import { createContext, useState, useCallback } from "react";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const handleFetch = useCallback(async () => {
    const resp = await axios.get(`http://localhost:3001/books`);
    setBooks(resp.data);
  }, []);

  const handleCreateBokks = async (title) => {
    const resp = await axios.post(`http://localhost:3001/books`, {
      title,
    });
    const updateBooks = [...books, resp.data];
    setBooks(updateBooks);
  };

  const handleUpdateBooks = async (id, title) => {
    const resp = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...resp.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  const handleBookDelete = async (id) => {
    const resp = await axios.delete(`http://localhost:3001/books/${id}`);
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  const valueToShare = {
    handleCreateBokks,
    handleFetch,
    books,
    handleUpdateBooks,
    handleBookDelete,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
