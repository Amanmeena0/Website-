import { useState, useEffect } from 'react';
import CrimeFilter from './CrimeFilter';
import BarChart from './BarChart';
import PropTypes from 'prop-types';
import axios from 'axios';  // Import axios for data fetching

const ParentComponent = () => {
    const [data, setData] = useState([]);
    const [selectedCrime, setSelectedCrime] = useState('');

    useEffect(() => {
        // Fetch data from backend or API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/search');
                if (Array.isArray(response.data)) {
                    setData(response.data);
                } else {
                    console.error("Expected an array but got:", response.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleCrimeChange = (crimeType) => {
        setSelectedCrime(crimeType);
    };

    return (
        <div className="p-4">
            <CrimeFilter onChange={handleCrimeChange} />
            <BarChart data={data} selectedCrime={selectedCrime} />
        </div>
    );
};

ParentComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        state_ut: PropTypes.string.isRequired,
        district: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        murder: PropTypes.number.isRequired,
        attempt_to_murder: PropTypes.number,
        rape: PropTypes.number,
        kidnapping_abduction: PropTypes.number,
        robbery: PropTypes.number,
        burglary: PropTypes.number,
        theft: PropTypes.number,
        auto_theft: PropTypes.number,
        riots: PropTypes.number,
        criminal_breach_of_trust: PropTypes.number,
        cheating: PropTypes.number,
        counterfeiting: PropTypes.number,
        arson: PropTypes.number,
        hurt_grevious_hurt: PropTypes.number,
        dowry_deaths: PropTypes.number,
        assault_on_women_with_intent_to_outrage_her_modesty: PropTypes.number,
        insult_to_modesty_of_women: PropTypes.number,
        cruelty_by_husband_or_his_relatives: PropTypes.number,
        importation_of_girls_from_foreign_countries: PropTypes.number,
        causing_death_by_negligence: PropTypes.number,
        other_ipc_crimes: PropTypes.number,
        total_ipc_crimes: PropTypes.number,
    })).isRequired,
    selectedCrime: PropTypes.string,
};

export default ParentComponent;
