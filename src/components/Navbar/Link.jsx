
import React from 'react';

const Link = ({ route }) => {
    return (
        <li>
            <a
                href={route.path}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-800"
            >
                {route.name}
            </a>
        </li>
    );
};

export default Link;
