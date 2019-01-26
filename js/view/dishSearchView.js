

class DishSearchView {

  constructor(containers, model) {
    this.container = containers.container;
    this.header = containers.header; 
    this.inputText = containers.inputText;
    this.select = containers.select;
    this.dishTypes = model.dishTypes; // make a const arr in model

    this.header.innerHTML = "Find a dish";
    this.inputText.defaultValue = "Enter key words";

    this.dishTypes.forEach((type) => {
      this.select.appendChild(this.createSelectDom);
    });
  }

  createSelectDom(type) {
    // method that returns the options for the select dom
    let option = document.createElement("option");
    option.value = type;
    option.text = type;
    return option;
  }
}