import React from 'react';

export default function Gifts(props) {

    return (
        <React.Fragment>
            <div className="p-2 m-3 w-4/6 text-christmas-green flex rounded-md" id="gift">
                <li className="p-1 text-christmas-green font-semibold font-marker text-2xl">{props.name}</li>
                <button
                    type="submit"
                    className="bg-christmas-red text-white text-base border-none rounded-md ml-auto px-2 hover:bg-christmas-red-300"
                    onClick={() => props.deleteGift(props.id)}
                >
                    Delete
                </button>
            </div>
        </React.Fragment>
    );
}