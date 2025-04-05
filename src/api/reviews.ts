let reviews = [
    { id: 1, bookId: 1, rating: 5, comment: "Prvo mnenje" }
];

export async function getReviews(bookId: number) {
    return reviews.filter(r => r.bookId === bookId);
}

export async function createReview(bookId: number, rating: number, comment: string) {
    const newReview = { id: reviews.length + 1, bookId, rating, comment };
    reviews.push(newReview);
    return newReview;
}