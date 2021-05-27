import React from 'react';
import './trainer.scss';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';

export const Trainer: React.FC = () => {
    return (
        <div>
            <h1> Trainer content</h1>
            <Link to="/trainer/Detail-traine">Trainer</Link>
            <div>
                <Outlet />
            </div>


        </div>



    )
}