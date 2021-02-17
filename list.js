userName = prompt("HO HO HO! It's me, Saint Nick! What's your name?")

let giftList = [];

let input = prompt(`Hello ${userName}! \nWhat would you like to do? Input new for new items, \nlist to list items, \ndelete to delete items,\nor quit to quit app.`);

const listPresents = () => {
  console.log(`Alright! Here's your list so far ${userName}!`)
  console.log("**********")
  giftList.forEach(function(item, i){
    console.log(item)
  });
  console.log("**********")
}

const addGift = () => {
  // ask for new Christmas gift
  let newGift = prompt(`I see you've been very nice this year! \nWhich gift would you like to add to your list ${userName}?`);
  let quantity = prompt(`And how many would you like ${userName}?`)
    if (quantity > 1) {
      giftList.push(`${quantity} ${newGift}s`);
    } else {
      giftList.push(`${quantity} ${newGift}`);
    }
    // print feedback
    console.log("Added gift to your list!\n")
}

const deleteGift = () => {
    // ask for index to be deleted
    let index = prompt("Enter index of gift to delete");
    // delete that gift
    giftList.splice(index, 1);
    console.log("Gift deleted! \nDon't worry, we'll save that one for next year instead!")
}

while (input !== "quit") {
    if (input === "list") {
      listPresents()
    } else if (input === "new") {
      addGift();
    } else if (input === "delete") {
      deleteGift()
    } else {
      console.log("Please enter a valid input")
    }
    // Ask again for new input
    input = prompt(`What would you like to do now ${userName}? Input new for new items, \nlist to list items, \ndelete to delete items \nor quit to quit app.`)
  }