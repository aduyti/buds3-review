import React from 'react';

const Review = ({ review }) => {
    const { user, userImage
        , rating, reviewText } = review;
    console.log(review);
    return (
        <div className="border-2 rounded-lg border-sky-500 mt-3 p-2">
            "{reviewText}"

        </div>
    );
};

export default Review;