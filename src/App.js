import React, { useState } from 'react';
import Gifts from './components/Gifts';
import AddGift from './components/AddGift';
import { nanoid } from "nanoid";

function App(props) {

  const [gifts, setGifts] = useState(props.gifts)

  function addItem(name) {
    const newItem = {id: `Gift: ${nanoid()}`, name: name};
    setGifts([...gifts, newItem]);
  }

  function deleteGift(id) {
    const remainingGifts = gifts.filter(gift => id !== gift.id);
    setGifts(remainingGifts);
  }

  const giftList = gifts.map(gift => 
    <Gifts 
      id={gift.id}
      name={gift.name}
      key={gift.id}
      deleteGift={deleteGift}
    />
  )

  return (
    <div className="flex h-screen text-center">
      <div className="p-6 align-middle m-auto w-4/6">
        <h1 className="font-bold md:text-3xl text-christmas-red">HO! HO! HO! I'm Santa Claus!</h1>
        <h2 className="md:text-2xl text-christmas-green">What would you like for Christmas?</h2>
        <AddGift addItem={addItem} />
        <ul className="flex flex-col items-center">
          {giftList}
        </ul>
      </div>
    </div>
  );
}

export default App;
