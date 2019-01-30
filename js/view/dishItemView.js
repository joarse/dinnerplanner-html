class DishItemView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
  }

  init() {
    this.model.getAllDishes().forEach((dish) => {
      this.container.append(this.createItem(dish));
    });
  }

  createItem(dish) {
    let div = `
    <div class="col-md-3">
      <img src="./images/${dish.image}"/>
      <label>${dish.name}</label>
    </div>`;
    return div;
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
