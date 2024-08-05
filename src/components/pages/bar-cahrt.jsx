import PropTypes from 'prop-types';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data, selectedCrime}) => {
  // Filtered data based on selected crime
  const filteredData = selectedCrime ? data.map(item => item[selectedCrime]) : data;
  console.log(filteredData)

  const chartData = {
    labels: data.map(item => `${item.state_ut} - ${item.district}`),
    datasets: selectedCrime ? [{
      label: selectedCrime,
      data: filteredData, 
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }] : [
      {
        label: 'Murder',
        data: data.map(item => item.murder),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Attempt to Murder',
        data: data.map(item => item.attempt_to_murder),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Rape',
        data: data.map(item => item.rape),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Kidnapping/Abduction',
        data: data.map(item => item.kidnapping_abduction),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Robbery',
        data: data.map(item => item.robbery),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Burglary',
        data: data.map(item => item.burglary),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Theft',
        data: data.map(item => item.theft),
        backgroundColor: 'rgba(255, 99, 71, 0.2)',
        borderColor: 'rgba(255, 99, 71, 1)',
        borderWidth: 1,
      },
      {
        label: 'Auto Theft',
        data: data.map(item => item.auto_theft),
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'rgba(0, 255, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Riots',
        data: data.map(item => item.riots),
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Criminal Breach of Trust',
        data: data.map(item => item.criminal_breach_of_trust),
        backgroundColor: 'rgba(255, 69, 0, 0.2)',
        borderColor: 'rgba(255, 69, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Cheating',
        data: data.map(item => item.cheating),
        backgroundColor: 'rgba(128, 0, 128, 0.2)',
        borderColor: 'rgba(128, 0, 128, 1)',
        borderWidth: 1,
      },
      {
        label: 'Counterfeiting',
        data: data.map(item => item.counterfeiting),
        backgroundColor: 'rgba(128, 128, 0, 0.2)',
        borderColor: 'rgba(128, 128, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Arson',
        data: data.map(item => item.arson),
        backgroundColor: 'rgba(255, 140, 0, 0.2)',
        borderColor: 'rgba(255, 140, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Hurt/Grievous Hurt',
        data: data.map(item => item.hurt_grevious_hurt),
        backgroundColor: 'rgba(255, 20, 147, 0.2)',
        borderColor: 'rgba(255, 20, 147, 1)',
        borderWidth: 1,
      },
      {
        label: 'Dowry Deaths',
        data: data.map(item => item.dowry_deaths),
        backgroundColor: 'rgba(139, 0, 0, 0.2)',
        borderColor: 'rgba(139, 0, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Assault on Women with Intent to Outrage Her Modesty',
        data: data.map(item => item.assault_on_women_with_intent_to_outrage_her_modesty),
        backgroundColor: 'rgba(0, 128, 128, 0.2)',
        borderColor: 'rgba(0, 128, 128, 1)',
        borderWidth: 1,
      },
      {
        label: 'Insult to Modesty of Women',
        data: data.map(item => item.insult_to_modesty_of_women),
        backgroundColor: 'rgba(255, 0, 255, 0.2)',
        borderColor: 'rgba(255, 0, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Cruelty by Husband or His Relatives',
        data: data.map(item => item.cruelty_by_husband_or_his_relatives),
        backgroundColor: 'rgba(255, 105, 180, 0.2)',
        borderColor: 'rgba(255, 105, 180, 1)',
        borderWidth: 1,
      },
      {
        label: 'Importation of Girls from Foreign Countries',
        data: data.map(item => item.importation_of_girls_from_foreign_countries),
        backgroundColor: 'rgba(0, 0, 128, 0.2)',
        borderColor: 'rgba(0, 0, 128, 1)',
        borderWidth: 1,
      },
      {
        label: 'Causing Death by Negligence',
        data: data.map(item => item.causing_death_by_negligence),
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 1,
      },
      {
        label: 'Other IPC Crimes',
        data: data.map(item => item.other_ipc_crimes),
        backgroundColor: 'rgba(184, 134, 11, 0.2)',
        borderColor: 'rgba(184, 134, 11, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total IPC Crimes',
        data: data.map(item => item.total_ipc_crimes),
        backgroundColor: 'rgba(169, 169, 169, 0.2)',
        borderColor: 'rgba(169, 169, 169, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

BarChart.propTypes = {
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

export default BarChart;
