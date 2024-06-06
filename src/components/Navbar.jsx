import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Dormitory Management</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
          <Link to="/student-list" className="text-gray-300 hover:text-white">Student List</Link>
          <Link to="/accounts" className="text-gray-300 hover:text-white">Accounts</Link>
          <Link to="/dorm-list" className="text-gray-300 hover:text-white">Dorm List</Link>
          <Link to="/room-list" className="text-gray-300 hover:text-white">Room List</Link>
          <Link to="/user-list" className="text-gray-300 hover:text-white">User List</Link>
          <Link to="/settings" className="text-gray-300 hover:text-white">Settings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;