
class DishFinishedView {

  constructor(containers, model) {
    this.container = containers.container;
    this.header = containers.header;
    this.editBtn = containers.editBtn;
    this.printBtn = containers.printBtn;

    this.header.innerHTML = "My Dinner: " + model.getNumberOfGuests() + " people";
    this.editBtn.innerHTML = "Go back and edit dinner";
    this.printBtn.innerHTML = "PrintFullRecipe";
  }
}