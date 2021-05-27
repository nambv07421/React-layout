import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
interface Header {
    Button: any;
}
export const Header: React.FC<Header> = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/trainer">Trainer</Link>
        </nav>
    )
}