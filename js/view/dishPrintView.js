class DishPrintView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
  }

  init() {
    this.container.empty();
    const menu = this.model.getFullMenu();
    menu.forEach(dish => {
      let dom = this.createDom(dish)
      this.container.append(dom);
    });
  }

  createDom(dish) {
    const dom = `
    <div class="row">
      <div class="col-sm-3">
        <img src="${dish.image}" width="100%" />
      </div>
      <div class="col-sm-4">
        <h2>${dish.name}</h2>
        <p>${this.model.lorem}</p>
      </div>
      <div class="col-sm-5">
        <h2>Preperation</h2>
        <p>${dish.description}</p>
      </div>
    </div>
    `;

    return $(dom);
  }

  hide() {
    this.container.hide();
  }

  show() {
    this.container.show();
    this.init();
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
