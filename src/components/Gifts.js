import React from 'react';

export default function Gifts(props) {
    return (
        <React.Fragment>
            <div className="p-5 m-3 w-4/6 bg-white text-christmas-green border-2">
                <span>{props.id}</span>
                <li>{props.name}</li>
            </div>
        </React.Fragment>
    );
}