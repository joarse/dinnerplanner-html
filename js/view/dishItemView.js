class DishItemView {

  constructor(container, model, generalController) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
    this.generalController = generalController;
  }

  init(args) {
    let text = args[0];
    let option = args[1];

    // there is no type called "all", so we need to change it into undefined
    if (option === "all") option = undefined;

    // show all dish item
    this.model.getAllDishes(option, text).forEach((dish) => {
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
    case "searched":
      const searchedInfo = this.model.getSearchedInfo();
      this.init(searchedInfo);
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
