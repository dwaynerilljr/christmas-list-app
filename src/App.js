import React, { useState } from 'react';
import Gifts from './components/Gifts';
import AddGift from './components/AddGift';
import { nanoid } from "nanoid";
import Hero from './components/Hero';

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

  function editGift(id, newName) {
    const editedGiftList = gifts.map(gift => {
      if (id === gift.id) {
        return {...gift, name: newName}
      }
      return gift
    });
    setGifts(editedGiftList);
  }

  const giftList = gifts.map(gift => 
    <Gifts 
      id={gift.id}
      name={gift.name}
      key={gift.id}
      deleteGift={deleteGift}
      editGift={editGift}
    />
  )

  return (
    <div className="grid text-center grid-cols-6 grid-rows-3">
      <Hero />
      <div className="p-6 align-middle m-auto sm:w-4/6 z-50 col-span-6">
        <h1 className="font-bold text-3xl sm:text-5xl text-christmas-red font-christmas">Christmas is right around the corner!</h1>
        <h2 className="mt-3 text-sm sm:text-2xl text-white">That means it's time to get started on that Christmas list! <br/> What would you like for Christmas?</h2>
        <AddGift addItem={addItem} />
        <div className="flex flex-col bg-white sm:text-3xl rounded-md overflow-y-auto h-4/6 mb-20">
          <h5 className="font-marker text-christmas-red">Dear Santa,</h5>
          <p className="font-marker text-christmas-red">All I want for Christmas is (a): </p>
          <ul>
            {giftList}
          </ul>
        </div>
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
