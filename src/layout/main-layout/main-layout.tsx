import { Header } from '../../base/header/header'
import React from 'react';
import './main-layout.scss';
import { Nav } from '../../base/nav/nav';
import { User } from '../../pages/main/user/user';
import { Trainer } from '../../pages/main/trainer/trainer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
    Outlet
} from 'react-router-dom';

export const MainLayout: React.FC = () => {
    return (
        <div className="container">
            <div className="nav">
                <Nav Button="" />
            </div>
            <div className="content">
                <div className="header">
                    <Header Button="hekojjj" />
                </div>
                <div className="content-outlet">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}