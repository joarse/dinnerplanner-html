

class SidearView {

  constructor(containers, model) {

    this.numberOfGuests = containers.numberOfGuests;
    this.menuCost = containers.menuCost;

    this.update();
  }

  update() {
    this.numberOfGuests.innerHTML = model.getNumberOfGuests();
    this.menuCost.innerHTML = model.getTotalMenuPrice();
  }
}