/**
 *
 *  This is the Index Generated Reviews
 *
 */

import { useState } from "react";

export const IndexGeneratedReviews = ({ reviews }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [newReview, setNewReview] = useState(null);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReviewData = { name, review };
    reviews.push(newReviewData);
    setNewReview(newReviewData);
    setName("");
    setReview("");
  };

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>
            <strong>{review.name}</strong>: {review.review}
          </p>
        </div>
      ))}
      <h3>Add Your Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>
      {newReview && <p>Thank you for your review!</p>}
    </div>
  );
};
