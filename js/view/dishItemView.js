class DishItemView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
  }

  init() {
    this.model.getAllDishes().forEach((dish) => {
      let item = new ItemView(dish.id, dish.image, dish.name)
      this.container.append(item.html);
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
    this.init();
  }
}
