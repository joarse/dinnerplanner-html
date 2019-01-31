class DishItemView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
  }

  init() {
    // show all dish item
    this.model.getAllDishes().forEach((dish) => {
      let itemView = new ItemView(dish.id, dish.image, dish.name)
      this.container.append(itemView.container);
      let itemCrtl = new ItemCtrl(itemView, this.generalController);
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
