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
    const options = [
      "main course",
      "side dish",
      "dessert",
      "appetizer",
      "salad",
      "bread",
      "breakfast",
      "soup",
      "beverage",
      "sauce",
      "drinks"];
    const inputSelect = this.container.find("#inputSelect");
    inputSelect.empty();
    options.forEach((option) => {
      //console.log(option);
      inputSelect.append($("<option>", {
        value: option,
        text: option
      }));
    });
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