import React from 'react';
import { useLoadData } from '../../Hooks/useLoadData';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useLoadData('reviews.json');
    return (
        <div className="my-5">
            {
                reviews.map(review =>
                    <Review
                        review={review}
                        key={review.id}
                    />)
            }
        </div>
    );
};

export default Reviews;