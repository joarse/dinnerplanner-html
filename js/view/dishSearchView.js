

class DishSearchView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    model.addObserver(this);  
    this.init();
  }

  init() {
    this.container.find("#inputText").val("Enter key words");

    this.container.find("#inputSelect").append($("<option>", {
      value: 0,
      text: "all"
    }))
    this.container.find("#inputSelect").append($("<option>", {
      value: 1,
      text: "starter"
    }));
    this.container.find("#inputSelect").append($("<option>", {
      value: 2,
      text: "main dish"
    }));
    this.container.find("#inputSelect").append($("<option>", {
      value: 1,
      text: "dessert"
    }));

    //dishItemView = new DishItemView(this.container.find("#dishItemView"), this.model);

  }

  hide() {
    this.container.hide();
  }

  show() {
    this.container.show();
    //this.init();
  }
  update(args) {
    switch (args) {
      case "numberOfGuests":
        //do something
        break;
    }
  }

}