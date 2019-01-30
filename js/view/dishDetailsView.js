

class DishDetailsView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    /*
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
    */
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


}