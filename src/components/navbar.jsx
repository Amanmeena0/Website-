
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ isAuthenticated }) => (
  <nav className="bg-gray-700 p-4">
    <div className="container mx-auto flex justify-between">
      <div className="flex space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link to="/statistics" className="text-gray-300 hover:text-white">Statistics</Link>
        <Link to="/ai-bot" className="text-gray-300 hover:text-white">AI Bot</Link>
      </div>
      <div className="flex space-x-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
            <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
          </>
        ) : (
          <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
        )}
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navbar;
