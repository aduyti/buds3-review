import React from 'react';

const About = () => {
    return (
        <div className="bg-slate-300/50 mx-10 my-5 md:my-11 rounded-lg h-96 py-10">
            <h1 className="text-3xl font-bold">About App</h1>
            <p className="text-medium text-gray-900 text-xl pt-6">
                routing | Active Link | 404
                <br />
                custom hook | tailwindcss
                <br />
                conditional render | recharts
            </p>
        </div>
    );
};

export default About;