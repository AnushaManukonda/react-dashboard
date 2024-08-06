import React from "react";
import Review from "./Review";
const reviews = [
  {
    person_name: "Jenni wilson",
    description: `The food was not only hot and fresh but also packed securely to
        maintain its quality. The dishes were bursting with flavor and clearly
        made with high-quality ingredients`,
    ratings: 4,
  },
  {
    person_name: "Jenni wilson",
    description: `The delivery was impressively prompt, arriving well within the
        estimated time frame`,
    ratings: 3,
  },
  {
    person_name: "Jenni wilson",
    description: `Delivered with a smile and amazing flavor!`,
    ratings: 5,
  },
];

function Ratings() {
  return (
    <div className="star-rating">
      <h3>Customer feed back</h3>
      {reviews.map((review, index) => {
        return (
          <Review
            key={"review" + index}
            person_name={review.person_name}
            review_desc={review.description}
            ratings={review.ratings}
          />
        );
      })}
    </div>
  );
}

export default Ratings;
