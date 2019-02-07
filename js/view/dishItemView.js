class DishItemView {

  constructor(container, model, generalController) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
    this.generalController = generalController;

    ////////////////////////////////////
    // Initiate dishItem Controller here
    ////////////////////////////////////
    this.controller = new DishItemCtrl(this, model, generalController);
  }

  init() {
    // show all dish item
    this.model.getDishesRawInfo().forEach((dish) => {
      // create dish item
      let itemView = new ItemView(dish.id, dish.image, dish.name);
      this.container.append(itemView.container);
    });

    // bind event on created dish item
    this.controller.bind();
  }

  update(args) {
    switch (args) {
    case "numberOfGuests":
      break;
    case "menu":
      break;
    case "searched":
      this.init();
      break;
    }
  }

  hide() {
    this.container.hide();
  }

  show() {
    this.container.show();
    this.container.empty();
    this.init(this.model.searchedInfo);
  }
}
