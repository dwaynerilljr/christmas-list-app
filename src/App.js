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
      <div className="p-6 align-middle m-auto w-4/6 z-50">
        <h1 className="font-bold md:text-5xl text-christmas-red font-christmas">Christmas is right around the corner!</h1>
        <h2 className="mt-3 md:text-2xl text-white">That means it's time to get started on that Christmas list! <br/> What would you like for Christmas?</h2>
        <AddGift addItem={addItem} />
        <ul className="flex flex-col bg-white text-3xl rounded-md">
          <h5 className="font-marker text-christmas-red">Dear Santa,</h5>
          <p className="font-marker text-christmas-red">All I want for Christmas is: </p>
          {giftList}
        </ul>
      </div>
      <div className="snowflakes z-10" aria-hidden="true">
        <div className="snowflake">
        ❅
        </div>
        <div className="snowflake">
        ❆
        </div>
        <div className="snowflake">
        ❅
        </div>
        <div className="snowflake">
        ❆
        </div>
        <div className="snowflake">
        ❅
        </div>
        <div className="snowflake">
        ❆
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
      </div>
    </div>
  );
}

export default App;
