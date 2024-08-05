import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./bar.css";

const SearchBar = ({ onDataFetched }) => {
    const [stateUt, setStateUt] = useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [year, setYear] = useState(2013);
    const [crimeType, setCrimeType] = useState("");

    useEffect(() => {
        if (data.length > 0) {
            let filtered = data;
            filtered = filtered.filter(item => item.year === parseInt(year));
            setFilteredData(filtered);
            onDataFetched(filtered,crimeType);
        }
    }, [year, crimeType, data, onDataFetched]);

    const handleSearch = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/search", {
                params: { state_ut: stateUt },
            });

            if (Array.isArray(response.data)) {
                setData(response.data);
                setFilteredData(response.data);
                onDataFetched(response.data);
            } else {
                console.error("Expected an array of data but got:", response.data);
                setData([]);
                setFilteredData([]);
                onDataFetched([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
            setFilteredData([]);
            onDataFetched([]);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <input
                type="text"
                value={stateUt}
                onChange={(e) => setStateUt(e.target.value)}
                placeholder="Enter State/UT"
                className="p-2 border text-black rounded mb-2 w-full max-w-md"
            />

            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded mb-4 w-full max-w-md"
            >
                Search
            </button>

            {data.length > 0 && (
                <div className="flex flex-col items-center p-4 w-full">
                    <form className="flex flex-wrap items-center justify-center gap-x-4 w-full">
                        <div className="flex flex-col text-black space-y-2 w-full max-w-sm">
                            <label htmlFor="year">Filter by Year:</label>
                            <input
                                type="number"
                                id="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="p-2 border rounded mb-2 w-full"
                            />
                        </div>

                        <div className="flex flex-col text-black space-y-2 w-full max-w-sm">
                            <label htmlFor="crime">Filter by Crime:</label>
                            <select
                                name="crime"
                                id="crime"
                                value={crimeType}
                                onChange={(e) => setCrimeType(e.target.value)}
                                className="p-2 border rounded mb-2 w-full"
                            >
                                <option value="">All</option>
                                {data && data.length > 0 &&
                                    Object.keys(data[0])
                                        .filter((key) =>
                                            [
                                                " attempt_to_murder",
                                                "culpable_homicide_not_amounting_to_murder",
                                                "rape",
                                                "custodial_rape",
                                                "other_rape",
                                                "kidnapping_abduction",
                                                "kidnapping_and_abduction_of_women_and_girls",
                                                "kidnapping_and_abduction_of_others",
                                                "dacoity",
                                                "preparation_and_assembly_for_dacoity",
                                                "robbery",
                                                "burglary",
                                                "theft",
                                                "auto_theft",
                                                "other_theft",
                                                "riots",
                                                "criminal_breach_of_trust",
                                                "cheating",
                                                "counterfeiting",
                                                "arson",
                                                "hurt_grevious_hurt",
                                                "dowry_deaths",
                                                "assault_on_women_with_intent_to_outrage_her_modesty",
                                                "insult_to_modesty_of_women",
                                                "cruelty_by_husband_or_his_relatives",
                                                "importation_of_girls_from_foreign_countries",
                                                "causing_death_by_negligence",
                                                "other_ipc_crimes",
                                                "total_ipc_crimes",

                                            ].includes(key)
                                        )
                                        .map((val, key) => (
                                            <option key={key} value={val}>
                                                {val.replace(/_/g, " ")}
                                            </option>
                                        ))}
                            </select>
                        </div>
                    </form>

                    <div className="table-container mt-4 w-full overflow-x-auto">
                        <table className="table-auto text-black     border-collapse w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">State/UT</th>
                                    <th className="px-4 py-2">District</th>
                                    <th className="px-4 py-2">Year</th>
                                    {crimeType === "" ? <><th className="px-4 py-2">Murder</th>
                                        <th className="px-4 py-2">Attempt to Murder</th>
                                        <th className="px-4 py-2">Culpable Homicide Not Amounting to Murder</th>
                                        <th className="px-4 py-2">Rape</th>
                                        <th className="px-4 py-2">Custodial Rape</th>
                                        <th className="px-4 py-2">Other Rape</th>
                                        <th className="px-4 py-2">Kidnapping/Abduction</th>
                                        <th className="px-4 py-2">Kidnapping and Abduction of Women and Girls</th>
                                        <th className="px-4 py-2">Kidnapping and Abduction of Others</th>
                                        <th className="px-4 py-2">Dacoity</th>
                                        <th className="px-4 py-2">Preparation and Assembly for Dacoity</th>
                                        <th className="px-4 py-2">Robbery</th>
                                        <th className="px-4 py-2">Burglary</th>
                                        <th className="px-4 py-2">Theft</th>
                                        <th className="px-4 py-2">Auto Theft</th>
                                        <th className="px-4 py-2">Other Theft</th>
                                        <th className="px-4 py-2">Riots</th>
                                        <th className="px-4 py-2">Criminal Breach of Trust</th>
                                        <th className="px-4 py-2">Cheating</th>
                                        <th className="px-4 py-2">Counterfeiting</th>
                                        <th className="px-4 py-2">Arson</th>
                                        <th className="px-4 py-2">Hurt/Grievous Hurt</th>
                                        <th className="px-4 py-2">Dowry Deaths</th>
                                        <th className="px-4 py-2">Assault on Women with Intent to Outrage Her Modesty</th>
                                        <th className="px-4 py-2">Insult to Modesty of Women</th>
                                        <th className="px-4 py-2">Cruelty by Husband or His Relatives</th>
                                        <th className="px-4 py-2">Importation of Girls from Foreign Countries</th>
                                        <th className="px-4 py-2">Causing Death by Negligence</th>
                                        <th className="px-4 py-2">Other IPC Crimes</th>
                                        <th className="px-4 py-2">Total IPC Crimes</th></> :

                                        <>
                                            <th className="px-4 py-2">{crimeType}</th>
                                        </>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{item.state_ut}</td>
                                        <td className="border px-4 py-2">{item.district}</td>
                                        <td className="border px-4 py-2">{item.year}</td>
                                        {crimeType === "" ? <> <td className="border px-4 py-2">{item.murder}</td>
                                            <td className="border px-4 py-2">{item.attempt_to_murder}</td>
                                            <td className="border px-4 py-2">{item.culpable_homicide_not_amounting_to_murder}</td>
                                            <td className="border px-4 py-2">{item.rape}</td>
                                            <td className="border px-4 py-2">{item.custodial_rape}</td>
                                            <td className="border px-4 py-2">{item.other_rape}</td>
                                            <td className="border px-4 py-2">{item.kidnapping_abduction}</td>
                                            <td className="border px-4 py-2">{item.kidnapping_and_abduction_of_women_and_girls}</td>
                                            <td className="border px-4 py-2">{item.kidnapping_and_abduction_of_others}</td>
                                            <td className="border px-4 py-2">{item.dacoity}</td>
                                            <td className="border px-4 py-2">{item.preparation_and_assembly_for_dacoity}</td>
                                            <td className="border px-4 py-2">{item.robbery}</td>
                                            <td className="border px-4 py-2">{item.burglary}</td>
                                            <td className="border px-4 py-2">{item.theft}</td>
                                            <td className="border px-4 py-2">{item.auto_theft}</td>
                                            <td className="border px-4 py-2">{item.other_theft}</td>
                                            <td className="border px-4 py-2">{item.riots}</td>
                                            <td className="border px-4 py-2">{item.criminal_breach_of_trust}</td>
                                            <td className="border px-4 py-2">{item.cheating}</td>
                                            <td className="border px-4 py-2">{item.counterfeiting}</td>
                                            <td className="border px-4 py-2">{item.arson}</td>
                                            <td className="border px-4 py-2">{item.hurt_grevious_hurt}</td>
                                            <td className="border px-4 py-2">{item.dowry_deaths}</td>
                                            <td className="border px-4 py-2">{item.assault_on_women_with_intent_to_outrage_her_modesty}</td>
                                            <td className="border px-4 py-2">{item.insult_to_modesty_of_women}</td>
                                            <td className="border px-4 py-2">{item.cruelty_by_husband_or_his_relatives}</td>
                                            <td className="border px-4 py-2">{item.importation_of_girls_from_foreign_countries}</td>
                                            <td className="border px-4 py-2">{item.causing_death_by_negligence}</td>
                                            <td className="border px-4 py-2">{item.other_ipc_crimes}</td>
                                            <td className="border px-4 py-2">{item.total_ipc_crimes}</td></> : <>
                                            <td className="border px-4 py-2">{item[crimeType]}</td>
                                        </>
                                        }
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

SearchBar.propTypes = {
    onDataFetched: PropTypes.func.isRequired,
};

export default SearchBar;
