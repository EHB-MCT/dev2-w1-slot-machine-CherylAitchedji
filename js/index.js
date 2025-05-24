import { slotMachine } from "./slotMachine.js";

function init() {
  console.log("Init");
  // TODO: log the document using console.log to test if you can get access to it
  // TODO: log the submit button. If that works, store that button in a variable
  // TODO: attach an event listener to that button and show a log "button clicked"
  // TODO: if the submit button is clicked, the lever is pulled (= call that function)
  document.querySelector("#button").addEventListener("click", function () {
    pullLever();
  });
}

function pullLever() {
  // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
  slotMachine.reset();
  // TODO: spin the slot machine
  slotMachine.spin();
  // TODO: show slots and win status
  showSlots();
  slotMachine.calculateStatus();
  showGameResult();
}

function showSlots() {
  // TODO: show the slot symbols in HTML
  document.querySelector("#result").innerHTML = "";
  for (let i = 0; i < slotMachine.slotsAmount; i++) {
    document.querySelector("#result").innerHTML +=
      "<span class=" +
      slotMachine.slots[i] +
      ">" +
      slotMachine.slots[i] +
      "</span>";
  }
}

function showGameResult() {
  // TODO: show a win or lose message in HTML
  if (slotMachine.win) {
    document.querySelector("#status").innerHTML = "<p>YOU WIN 🎉💰</p>";
  } else {
    document.querySelector("#status").innerHTML = "<p>YOU LOSE 😭🥺</p>";
  }
}

init();
