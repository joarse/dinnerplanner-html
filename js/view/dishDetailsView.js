

class DishDetailsView {

  constructor(containers, model) {
    this.container = containers.container;
    this.infoDiv = containers.infoDiv;
    this.ingredientDiv = containers.ingredientDiv;
    this.menu = model.getFullMenu(); // this needs to be get selected dish for interaction

    this.infoHeader = containers.infoHeader;
    this.infoText = containers.infoText;
    this.image = containers.image;
    this.backBtn = containers.backBtn;
    this.preperationHeader = containers.preperationHeader;
    this.preperationText = containers.preperationText;

    this.image.src = "./images/" + this.menu[0].image; // needs to change for interaction
    this.infoHeader.innerHTML = "Ingredients for " + model.getNumberOfGuests() + " poeple";
    this.backBtn.innerHTML = "Back to search";
    this.infoText.innerHTML = "lorem ipsum";
    this.preperationText.innerHTML = menu[0].description; // change when implementing interaction
    this.preperationHeader.innerHTML = "Preperation";

    this.ingredientHeader = containers.ingredientHeader;
    this.addBtn = containers.addBtn;
    this.ingredientText = containers.ingredientText;
    this.totalText = containers.totalText;

    this.addBtn.innerHTML = "Add to menu";
    this.ingredientHeader = "Ingredients for " + model.getNumberOfGuests() + " people";

    let sum = 0;
    menu[0].ingredients.forEach((ingredient) => {
      // this also needs changing for interaction
      let text = document.createElement("p");
      let textNode = document.createTextNode(ingredient.quantity + ingredient.unit + ingredient.name + " SEK " + ingredient.price);
      sum += ingredient.price;

      text.appendChild(textNode);
      this.ingredientText.appendChild(text);
    });

    this.totalText.innerHTML = "SEK " + sum;
  }
}