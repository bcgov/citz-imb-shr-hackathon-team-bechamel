import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home'
import Dashboard from '../views/Dashboard'

export default function ViewRouter() {
    return (
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Dashboard" Component={Dashboard} />
      </Routes>
    );
  }