import React, { useState } from 'react';

function AddGift(props) {

    const [giftName, setGiftName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        props.addItem(giftName);
        setGiftName('');
    }

    function handleChange(e) {
        setGiftName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter gift.. :)" 
                className="w-4/6 my-8 rounded-lg font-marker text-christmas-green focus:border-2 border-christmas-red" 
                id="new-gift-input"
                autoComplete='off'
                value={giftName}
                onChange={handleChange}
            />
            <button 
                type="submit" 
                className="bg-christmas-green text-white ml-5 p-2 rounded-md hover:bg-christmas-green-100"
                id="addBtn"
            >
                Add Gift
            </button>
        </form>
    )
}

export default AddGift;