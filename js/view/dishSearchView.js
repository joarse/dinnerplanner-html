

class DishSearchView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    model.addObserver(this);  
  }

  init() {
    this.container.find("#inputSelect").empty();
    this.container.find("#inputText").val("Enter key words");
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