import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Login from './pages/Login.jsx';
import StudentList from './pages/StudentList.jsx';
import Accounts from './pages/Accounts.jsx';
import DormList from './pages/DormList.jsx';
import RoomList from './pages/RoomList.jsx';
import UserList from './pages/UserList.jsx';
import Settings from './pages/Settings.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/student-list" element={<StudentList />} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route exact path="/dorm-list" element={<DormList />} />
        <Route exact path="/room-list" element={<RoomList />} />
        <Route exact path="/user-list" element={<UserList />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;