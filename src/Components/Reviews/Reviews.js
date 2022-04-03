import React from 'react';
import { useLoadData } from '../../Hooks/useLoadData';

const Reviews = () => {
    const [reviews] = useLoadData('reviews.json');
    console.log(reviews);
    return (
        <div>
            reviews {reviews.length}
        </div>
    );
};

export default Reviews;