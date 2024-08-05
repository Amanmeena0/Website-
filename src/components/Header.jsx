// Header.jsx
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-blue-400 mb-4">Welcome to Crime Awareness Portal</h1>
    <p className="text-lg text-black mb-6">
      This portal provides information on crime statistics since 2000, helping you stay informed and safe.
    </p>
    <div className="bg-gray-400 text-gray-900 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">About Our Mission</h2>
      <p className="mb-4">
        Our goal is to provide up-to-date and accurate crime statistics to the public. By offering a comprehensive overview of crime data, we aim to enhance public safety and awareness. Explore the portal to find statistics, safety tips, and more.
      </p>
      <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
      <ul className="list-disc list-inside text-left">
        <li>Access crime data by state and district.</li>
        <li>Analyze trends and patterns in crime rates.</li>
        <li>Receive safety tips and alerts.</li>
        <li>Report incidents and seek assistance.</li>
      </ul>
    </div>
    <div className="mt-8">
      <Link to="/statistics" className="inline-block px-6 py-3 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded mr-4">
        Explore Statistics
      </Link>
      <Link to="/ai-bot" className="inline-block px-6 py-3 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded">
        Talk to AI Bot
      </Link>
    </div>
  </div>
);

export default Header;