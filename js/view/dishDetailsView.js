

class DishDetailsView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
  }

  init(id) {
    const dish = this.model.getDish(id);
    this.container.find("#infoHeader").html(dish.name);

    this.container.find("#infoImg")
                  .attr("src", dish.image)
                  .attr("width", "100%");
    this.container.find("#infoText").html(this.model.lorem);
    this.container.find("#backToSearchBtn").html("Back to search");

    this.container.find("#preparationHeader").html("Preperation");
    this.container.find("#preparationText").html(dish.description);


    this.container.find("#ingrHeader").html("Ingredients for " + this.model.getNumberOfGuests() + " people");
    this.container.find("#ingrText").html("");


    let sum = 0;
    /*
    dish.ingredients.forEach((ingredient) => {
      let text = document.createElement("p");
      let textNode = document.createTextNode(ingredient.quantity + " " + ingredient.unit + " "  + ingredient.name + " SEK " + ingredient.price);
      sum += ingredient.price;
      text.appendChild(textNode);
      this.container.find("#ingrText").append(text);

    });
    */
    this.container.find("#ingrTable").empty();
    dish.ingredients.forEach(ingredient => {
      let row = $("<tr>", { "scope": "row"});
      const quantity = $("<th>", { "scope": "col" }).text((ingredient.quantity * this.model.getNumberOfGuests()).toFixed(2));
      const unit = $("<th>", { "scope": "col" }).text(ingredient.unit);
      const name = $("<th>", { "scope": "col" }).text(ingredient.name);
      const price = $("<th>", { "scope": "col" }).text(" SEK: " + (ingredient.price * this.model.getNumberOfGuests()));
      row.append(quantity, unit, name, price);
      sum += ingredient.price * this.model.getNumberOfGuests();
      this.container.find("#ingrTable").append(row);
    });

    this.container.find("#addToMenuBtn").html("Add to menu");
    this.container.find("#totalText").html("SEK " + sum);

  }

  show() {
    this.container.show();
    this.init(this.model.selectedDishItem);
  }
  hide() {
    this.container.hide();
  }

  update(model, args) {
    // shoundt do anything here
    switch (args) {
      case "numberOfGuests":
        this.init(this.model.selectedDishItem);
        break;
      case "menu":
        break;
    }
  }

}