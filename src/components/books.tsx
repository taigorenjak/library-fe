import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooks } from "../api/books";

export default function Books() {
    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        getBooks().then(setBooks);
    }, []);

    return (
        <div>
            <h2 className="mb-4">Seznam knjig</h2>
            <div className="list-group">
                {books.map(book => (
                    <div key={book.id} className="list-group-item">
                        <h5>{book.title}</h5>
                        <p className="mb-1">Avtor: {book.author}</p>
                        <Link to={`/books/${book.id}/reviews`} className="btn btn-primary btn-sm">
                            Ogled mnenj
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}