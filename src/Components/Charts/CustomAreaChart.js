import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const CustomAreaChart = ({ data }) => {
    return (
        <div>
            <h3 className="text-blue-700 font-bold mb-5">Monthly Sale</h3>
            <AreaChart className=" mx-auto" width={600} height={300} data={data} >
                <Area type="monotone" dataKey="investment" stroke="green" fill="green" />
                <Area type="monotone" dataKey="revenue" stroke="blue" fill="blue" />
                <CartesianGrid stroke="gray" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
            </AreaChart>
        </div>
    );
};

export default CustomAreaChart;