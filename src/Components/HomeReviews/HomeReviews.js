import React from 'react';
import { useLoadData } from '../../Hooks/useLoadData';
import Review from '../Review/Review';

const HomeReviews = () => {
    const [reviews] = useLoadData('reviews.json');
    return (
        <div className="bg-stone-300/50 rounded-lg p-1 md:my-10">
            <h2 className="my-10 text-4xl font-bold">Customer Reviews</h2>
            <div>
                {
                    reviews.slice(0, 3)
                        .map(review =>
                            <Review
                                review={review}
                                key={review.id}
                            />)
                }
            </div>
            <button className="my-10 border-2 border-yellow-600 py-2 bg-blue-500  text-yellow-100 font-bold rounded-lg px-10">See All Reviews</button>
        </div>
    );
};

export default HomeReviews;