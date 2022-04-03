import React from 'react';
import { useLoadData } from '../../Hooks/useLoadData';

const Dashboard = () => {
    const [chartData] = useLoadData('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json');
    console.log(chartData);
    return (
        <div>
            D {chartData.length}
        </div>
    );
};

export default Dashboard;