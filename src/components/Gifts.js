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
                className="w-5/6 rounded-lg font-marker text-christmas-green" 
                id="new-gift-input"
                autoComplete='off'
                value={newName}
                onChange={handleChange}
            />
            <div className="ml-auto font-sans">
                <button
                    type="submit"
                    className="bg-christmas-green text-white text-base border-none rounded-md mr-2 p-2 hover:bg-christmas-green-300"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="bg-christmas-red text-white text-base border-none rounded-md p-2 hover:bg-christmas-red-300"
                    onClick={() => setEditing(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )

    const viewTemplate = (
        <div className="px-5 my-2 w-full text-christmas-green flex rounded-md" id="gift">
            <li className="p-1 text-christmas-green font-semibold font-marker text-2xl">{props.name}</li>
            <div className="ml-auto font-sans">
                <button
                    type="submit"
                    className="bg-christmas-red text-white text-base border-none rounded-md mr-2 p-2 hover:bg-christmas-red-300"
                    onClick={() => props.deleteGift(props.id)}
                >
                    Delete
                </button>
                <button
                    type="button"
                    className="bg-christmas-green text-white text-base border-none rounded-md p-2 hover:bg-christmas-green-300"
                    onClick={() => setEditing(true)}
                >
                    Edit
                </button>
            </div>
        </div>
    )

    return <li className="p-1 text-christmas-green font-semibold font-marker text-2xl">{isEditing ? editTemplate : viewTemplate}</li>
}