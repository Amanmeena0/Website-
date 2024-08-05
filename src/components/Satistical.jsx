import { useState } from 'react';
import SEARCH from './pages/search-bar';
import DoughnutChart from './pages/bar-cahrt';

const Satistical = () => {
    const [chartData, setChartData] = useState([]);
    const [selectedCrime,SetselectedCrime] = useState("murder");

    const handleDataFetched = (data,crime) => {
        // Process and transform data if necessary
        setChartData(data);
        SetselectedCrime(crime);
    };

    return (
        <div className="p-4">
            <SEARCH onDataFetched={handleDataFetched} />
            {chartData.length > 0 && <DoughnutChart data={chartData} selectedCrime={selectedCrime}/>}
        </div>
    );
};

export default Satistical;
