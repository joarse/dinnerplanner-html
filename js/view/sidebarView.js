

class SidearView {

  constructor(containers, model) {

    this.numberOfGuests = containers.numberOfGuests;
    this.menuCost = containers.menuCost;

    this.numberOfGuests = model.getNumberOfGuests();
    this.menuCost = model.getTotalMenuPrice();
  }


}