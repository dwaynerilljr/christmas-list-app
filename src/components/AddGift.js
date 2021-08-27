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
                className="w-4/6 mt-6 rounded-lg" 
                id="new-gift-input"
                autocomplete='off'
                value={giftName}
                onChange={handleChange}
            />
            <button 
                type="submit" 
                className="bg-christmas-red text-white ml-5 p-2 rounded-md"
            >
                Add Gift
            </button>
        </form>
    )
}

export default AddGift;