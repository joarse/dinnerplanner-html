

class DishDetailsView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
  }

  init() {
    this.container.find("#infoHeader").html(this.model.getDish(1).name);
    
    this.container.find("#infoImg").attr("src","./images/" + this.model.getDish(1).image); // needs get selected dish from menu
    this.container.find("#infoText").html(this.model.lorem);
    this.container.find("#backToSearchBtn").html("Back to search");

    this.container.find("#preparationHeader").html("Preperation");
    this.container.find("#preparationText").html(this.model.getDish(1).description);


    this.container.find("#ingrHeader").html("Ingredients for " + this.model.getNumberOfGuests() + " people");
    this.container.find("#ingrText").html("");  
    let sum = 0;
    this.model.getDish(1).ingredients.forEach((ingredient) => {
      // this also needs changing for interaction
      let text = document.createElement("p");
      let textNode = document.createTextNode(ingredient.quantity + " " + ingredient.unit + " "  + ingredient.name + " SEK " + ingredient.price);
      sum += ingredient.price;
      text.appendChild(textNode);
      this.container.find("#ingrText").append(text);

    });

    this.container.find("#addToMenuBtn").html("Add to menu");
    this.container.find("#totalText").html("SEK " + sum);

  }

  show() {
    this.container.show();
    this.init();
  }
  hide() {
    this.container.hide();
  }

  update(args) {
    // shoundt do anything here
    switch (args) {
      case "numberOFGuests":
        break;
      case "menu":
        break;
    }
  }

}