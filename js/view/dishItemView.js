class DishItemView {

  constructor(container, model, generalController) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
    this.generalController = generalController;
  }

  init() {
    // show all dish item
    this.model.getAllDishes().forEach((dish) => {
      // create dish item
      let itemView = new ItemView(dish.id, dish.image, dish.name);
      this.container.append(itemView.container);
      // create dish item controller and bind event on it
      let itemCrtl = new ItemCtrl(itemView, this.model, this.generalController);
      itemCrtl.bind();
    });
  }

  update(args) {
    switch (args) {
    case "numberOfGuests":
      break;
    case "menu":
      break;
    }
  }

  hide() {
    this.container.hide();
  }

  show() {
    this.container.show();
    this.container.empty();
    this.init();
  }
}
