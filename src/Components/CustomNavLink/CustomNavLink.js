import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomNavLink = ({ children, to }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({
        path: resolved.pathname,
        end: true
    });
    return (
        <div>
            <Link className={`${match ? "font-bold text-amber-600 border-b-2 border-amber-600" : "font-medium"}`} to={to}>{children}</Link>
        </div>
    );
};

export default CustomNavLink;