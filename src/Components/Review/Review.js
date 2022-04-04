import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as StarOutIcon } from '@heroicons/react/outline';

const Review = ({ review }) => {
    const { user, userImage
        , rating, reviewText } = review;
    const ratingStars = [1, 2, 3, 4, 5];
    return (
        <div className="bg-sky-400/25 border-2 rounded-lg border-sky-500 mt-3 p-4 max-w-2xl mx-auto">
            <p className="text-xl italic text-gray-700 font-medium">
                {reviewText}
            </p>
            <div className="flex justify-between mx-4 mt-4">
                <div className="flex justify-center items-center">
                    {
                        ratingStars.map(rate => rate <= rating ?
                            <StarIcon className="w-4 h-4 text-yellow-700" key={rate} />
                            :
                            <StarOutIcon className="w-4 h-4 text-yellow-700" key={rate} />
                        )
                    }

                    <p className="ml-2 bg-gray-800/50 text-white font-medium rounded-2xl px-1.5 text-sm">
                        {rating}
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-4 h-4 rounded-2xl mr-2" src={userImage} alt={user} />
                    <p className="text-xs font-bold text-slate-700/75">{user}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;