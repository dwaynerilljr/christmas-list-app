import React, { useState } from 'react';

export default function Gifts(props) {
    const [isEditing, setEditing] = useState(false)
    const [newName, setNewName] = useState('')

    function handleChange(e) {
        setNewName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editGift(props.id, newName);
        setNewName('');
        setEditing(false);
    }

    const editTemplate = (
        <form onSubmit={handleSubmit} className="flex mx-4">
            <input 
                type="text" 
                placeholder="Edit gift" 
                className="w-3/6 rounded-sm font-marker text-christmas-green py-0" 
                id="new-gift-input"
                autoComplete='off'
                value={newName}
                onChange={handleChange}
            />
            <div className="ml-auto font-sans">
                <button
                    type="submit"
                    className="bg-christmas-green text-white text-sm sm:text-base border-none rounded-md mr-2 p-1 sm:p-2 hover:bg-christmas-green-300"
                >
                    Save
                </button>
                <button
                    type="button"
                    className="bg-christmas-red text-white text-sm sm:text-base border-none rounded-md p-1 sm:p-2 hover:bg-christmas-red-300"
                    onClick={() => setEditing(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )

    const viewTemplate = (
        <div className="px-2 w-full text-christmas-green flex border-b-2 border-blue-100" id="gift">
            <li className="p-1 pl-4 text-christmas-green font-semibold font-marker sm:text-2xl ">{props.name}</li>
            <div className="ml-auto font-sans">
                <button
                    type="submit"
                    className="bg-christmas-red text-white text-sm border-none rounded-md mr-2 p-1 sm:p-2 hover:bg-christmas-red-300"
                    onClick={() => props.deleteGift(props.id)}
                >
                    Delete
                </button>
                <button
                    type="button"
                    className="bg-christmas-green text-white text-sm border-none rounded-md mb-1 p-1 sm:p-2 hover:bg-christmas-green-300"
                    onClick={() => setEditing(true)}
                >
                    Edit
                </button>
            </div>
        </div>
    )

    return <li className="p-1 text-christmas-green font-semibold font-marker sm:text-2xl">{isEditing ? editTemplate : viewTemplate}</li>
}