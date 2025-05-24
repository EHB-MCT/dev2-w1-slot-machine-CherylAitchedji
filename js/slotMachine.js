export const slotMachine = {
  calculateStatus: function () {
    // TODO: check for three similar symbols and update 'win'-boolean
    for (let i = 0; i < this.slotsAmount; i++) {
      if (this.slots[0] != this.slots[i]) {
        this.win = false;
      }
    }
  },
  getRandomSymbol: function () {
    // TODO: return a single random symbol
    return this.symbols[Math.floor(Math.random() * 4)];
  },
  reset: function () {
    // TODO: Empty out the slots and reset 'win'-boolean
    this.slots = [];
    this.win = true;
  },
  symbols: ["♠", "♥", "♣", "♦"],
  slots: [],
  slotsAmount: 3,
  spin: function () {
    // TODO: generate three random symbols, and add them to the slots of the slotMachine
    for (let i = 0; i < this.slotsAmount; i++) {
      const symbol = this.getRandomSymbol();
      this.slots.push(symbol);
    }
  },
  win: true,
};
