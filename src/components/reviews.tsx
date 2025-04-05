import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviews, createReview } from "../api/reviews";

export default function Reviews() {
    const { id } = useParams();
    const [reviews, setReviews] = useState<any[]>([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        if (id) getReviews(parseInt(id)).then(setReviews);
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (id && comment) {
            createReview(parseInt(id), 5, comment)
                .then(newReview => setReviews([...reviews, newReview]));
            setComment("");
        }
    };

    return (
        <div>
            <Link to="/books" className="btn btn-secondary mb-3">← Nazaj</Link>
            <h3 className="mb-3">Mnenja</h3>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Vaše mnenje"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Oddaj</button>
            </form>

            <div className="list-group">
                {reviews.map(review => (
                    <div key={review.id} className="list-group-item">
                        <p className="mb-1">{review.comment}</p>
                        <small>Ocena: {review.rating}/5</small>
                    </div>
                ))}
            </div>
        </div>
    );
}