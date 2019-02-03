
class DishFinishedView {

  constructor(container, model) {
    this.container = container;
    this.itemContainer = this.container.find("#finishedItemDiv");
    this.model = model;
    this.model.addObserver(this);
  }
  init() {
    this.itemContainer.empty();
    this.model.getFullMenu().forEach((dish) => {
     
    // create dish item
      let itemView = new ItemView(dish.id, dish.image, dish.name)
      this.itemContainer.append(itemView.container);
    // create dish item controller and bind event on it
      let itemCrtl = new ItemCtrl(itemView, this.model, this.generalController);
      itemCrtl.bind();
      });
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

  update(args) {
    switch (args) {
      case "numberOFGuests":
        break;
      case "menu":
        break;
    }
  }
}