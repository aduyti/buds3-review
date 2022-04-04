import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const CustomBarChart = ({ data }) => {
    return (
        <div>
            <h3 className="text-blue-700 font-bold mb-5">Monthly Sale</h3>
            <LineChart className=" mx-auto" width={600} height={300} data={data} >
                <Line type="monotone" dataKey="sell" stroke="green" />
                <CartesianGrid stroke="gray" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default CustomBarChart;