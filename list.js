name = prompt("HO HO HO! It's me, Saint Nick! What's your name?")

let giftList = ["World Peace"];

let input = prompt("Hello " + name + "! \nWhat would you like to do? Input new for new items, \nlist to list items, \ndelete to delete items,\nor quit to quit app" );

while (input !== "quit") {
  if (input === "list") {
    listPresents()
  } else if (input === "new") {
    addGift();
  } else if (input === "delete") {
    deleteGift()
  }
  // Ask again for new input
  input = prompt("Would would you like to do now " + name + "? Input new for new items, \nlist to list items, \ndelete to delete items \nor quit to quit app")
} 

console.log("That's all for this year! If you think of anything else, come on back!")

function listPresents() {
  console.log("Alright! Here's your list so far " + name + "!")
  console.log("**********")
  giftList.forEach(function(item, i){
    console.log(i + ": " + item)
  });
  console.log("**********")
}

function addGift() {
  // ask for new grocery item
  let newGift = prompt("I see you've been very nice this year! \nWhich gift would you like to add to your list " + name +"?")
    // add to the groceryList array
    giftList.push(newGift);
    // print feedback
    console.log("Added gift to your list!")
}

function deleteGift() {
    // ask for index to be deleted
    let index = prompt("Enter index of gift to delete");
    // delete that item
    giftList.splice(index, 1);
    console.log("Gift deleted! \nDon't worry, we'll save that one for next year instead!")
}