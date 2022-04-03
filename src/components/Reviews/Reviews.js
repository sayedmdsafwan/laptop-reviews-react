import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className="w-4/5 mx-auto my-8 grid lg:grid-cols-3 grid-cols-1">
            {reviews.map((review) => (
                <Review review={review} key={review.id}></Review>
            ))}
        </div>
    );
};

export default Reviews;
