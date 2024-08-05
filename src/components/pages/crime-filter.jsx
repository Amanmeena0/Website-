import PropTypes from 'prop-types';

const CrimeFilter = ({ onChange }) => {
    const crimeTypes = [
        'Murder', 'Attempt to Murder', 'Rape', 'Kidnapping/Abduction', 
        'Robbery', 'Burglary', 'Theft', 'Auto Theft', 'Riots',
        'Criminal Breach of Trust', 'Cheating', 'Counterfeiting', 
        'Arson', 'Hurt/Grievous Hurt', 'Dowry Deaths',
        'Assault on Women with Intent to Outrage Her Modesty', 
        'Insult to Modesty of Women', 'Cruelty by Husband or His Relatives', 
        'Importation of Girls from Foreign Countries', 
        'Causing Death by Negligence', 'Other IPC Crimes', 'Total IPC Crimes'
    ];

    return (
        <div className="mb-4">
            <label htmlFor="crime-filter" className="block text-gray-700">Select Crime Type:</label>
            <select
                id="crime-filter"
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
                <option value="">All Crimes</option>
                {crimeTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
};

CrimeFilter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default CrimeFilter;