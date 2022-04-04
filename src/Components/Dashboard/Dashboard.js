import React from 'react';
import { useLoadData } from '../../Hooks/useLoadData';
import CustomAreaChart from '../Charts/CustomAreaChart';
import CustomBarChart from '../Charts/CustomBarChart';

const Dashboard = () => {
    const [chartData] = useLoadData('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json');
    return (
        <div className="my-10">
            <CustomBarChart data={chartData} />
            <CustomAreaChart data={chartData} />
        </div>
    );
};

export default Dashboard;