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

  initLoading() {
    const loadingView = `
    <div class="container loading">
      <div class="row justify-content-center">
        <div class="spinner-border" role="status" id="spinner">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>`;

    return $(loadingView);
  }

  startLoading() {
    const loadingView = this.initLoading();
    this.container.children().hide();
    this.container.append(loadingView);
    this.container.show();
  }

  stopLoading() {
    this.container.children().show();
    this.container.find(".loading").hide();
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
