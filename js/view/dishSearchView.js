class DishSearchView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    model.addObserver(this);
  }

  init() {
    this.generateSearchInput();
    this.generateSelectOption();
  }

  generateSearchInput() {
    this.container.find("#inputText").attr("placeholder", "Enter keywords");
  }

  generateSelectOption() {
    this.container.find("#inputSelect").empty();
    this.container.find("#inputSelect").append($("<option>", {
      value: "all",
      text: "all"
    }));
    this.container.find("#inputSelect").append($("<option>", {
      value: "starter",
      text: "starter"
    }));
    this.container.find("#inputSelect").append($("<option>", {
      value: "main dish",
      text: "main dish"
    }));
    this.container.find("#inputSelect").append($("<option>", {
      value: "dessert",
      text: "dessert"
    }));
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
      case "numberOfGuests":
        //do something
        break;
    }
  }


}