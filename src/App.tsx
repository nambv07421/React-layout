
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Outlet
} from 'react-router-dom';
import { MainLayout } from './layout/main-layout/main-layout';
import { User } from './pages/main/user/user';
import { Trainer } from './pages/main/trainer/trainer';
import { DetailTrainer } from './pages/main/trainer/detail-trainer/detail-trainer';


const App: React.FC = () => {

  return <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/user" element={<User />}></Route>
        <Route path="/trainer" element={<Trainer />}>
          <Route path=":detailTraniner" element={<DetailTrainer />} />
        </Route>
      </Route>

    </Routes>
  </Router>
};
export default App;
