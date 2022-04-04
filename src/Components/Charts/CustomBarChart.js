import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const CustomBarChart = ({ data }) => {
    return (
        <div className="mt-12">
            <h3 className="text-blue-700 font-bold mb-5">Investment VS Revenue</h3>
            <BarChart className="mx-auto" width={600} height={300} data={data}>
                <Bar dataKey="revenue" fill="blue" />
                <Bar dataKey="investment" fill="green" />
                <CartesianGrid stroke="gray" strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
            </BarChart>

        </div>
    );
};

export default CustomBarChart;