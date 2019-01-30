
class DishFinishedView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
    /*
    this.header = containers.header;
    this.editBtn = containers.editBtn;
    this.printBtn = containers.printBtn;

    this.header.innerHTML = "My Dinner: " + model.getNumberOfGuests() + " people";
    this.editBtn.innerHTML = "Go back and edit dinner";
    this.printBtn.innerHTML = "PrintFullRecipe";
    */
  }
  init() {
    this.container.find("#printButton").html("Print full recipe");
    this.container.find("dishTotalPrice").html(this.model.getTotalMenuPrice());
  }

  show() {
    this.container.show();
    this.init();
  }

  hide() {
    this.container.hide();
  }
}