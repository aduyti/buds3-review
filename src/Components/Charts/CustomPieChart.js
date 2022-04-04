import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const CustomPieChart = ({ data }) => {
    // const investmentData = data.map(entry => { 
    //     const {month,investment} = entry;
    //     return {month, investment};
    // });
    return (
        <div className="mt-12">
            <h3 className="text-blue-700 font-bold">Investment VS Revenue</h3>
            <PieChart className="mx-auto" width={400} height={400}>
                <Pie data={data}
                    dataKey="investment"
                    cx={200}
                    cy={200}
                    outerRadius={100}
                    fill="green" label />
                <Pie data={data}
                    dataKey="revenue"
                    cx={200}
                    cy={200}
                    innerRadius={120}
                    outerRadius={150}
                    fill="blue" label />
                <Tooltip />
            </PieChart>

        </div>
    );
};

export default CustomPieChart;