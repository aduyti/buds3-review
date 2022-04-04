import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/outline';


const NotFound = () => {
    return (
        <div className="bg-slate-300/50 mx-10 my-5 md:my-11 rounded-lg h-96 py-10">
            <h1 className="text-6xl md:text-[150px] font-black">404</h1>
            <p className="text-medium text-gray-900 text-3xl pt-10">Page not found</p>
            <EmojiSadIcon className="w-14 h-14 text-amber-600 mx-auto mt-6" />
        </div>
    );
};

export default NotFound;