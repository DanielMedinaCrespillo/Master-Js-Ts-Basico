console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }

  play(): void {
    this.coins++;

    const slot1 = Math.random() >= 0.5;
    const slot2 = Math.random() >= 0.5;
    const slot3 = Math.random() >= 0.5;
    console.log(slot1);
    console.log(slot2);
    console.log(slot3);

    if (slot1 && slot2 && slot3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine = new SlotMachine();

machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
