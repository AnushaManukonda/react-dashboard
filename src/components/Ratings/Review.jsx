import React from "react";
import profileicon from "../../../src/assets/profileicon.png";
import { BsFillStarFill, BsStar } from "react-icons/bs";

export default function Review({ person_name, review_desc, ratings = 1, key }) {
  const items = [];
  const MAX_STARS = 5;

  for (let i = 1; i <= MAX_STARS; i++) {
    if (i > ratings) {
      items.push(<BsStar className="last-star" />);
    } else {
      items.push(<BsFillStarFill />);
    }
  }
  return (
    <>
      <div className="feedback-1" key={key}>
        <div className="profile-name">
          <img
            src={profileicon}
            alt="Profile Icon"
            className="profile-icon-review"
          />
          <h5 className="customer-name">{person_name}</h5>
        </div>
        <div className="stars">{items}</div>
        <p>{review_desc}</p>
      </div>
    </>
  );
}
