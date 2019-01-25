

class DishPrintView {

  constructor(containers, model) {
    this.container = containers.container;
    this.button = containers.button;
    this.header1 = containers.header1;
    this.header2 = containers.header2;
    this.menu = model.getFullMenu();

    this.header1.innerHTML = "My dinner: " + model.getNumberOFGuests() + " people";
    this.button.innerHTML = "Go back and edit dinner";

    this.menu.forEach((dish) => {
      this.createDishInPrint(dish);
    });
  }

  createDishInPrint(dish) {
    // method that creates html-doms displaying a dish
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let image = document.createElement("img");
    let dishHeader = document.createElement("header");
    let dishText = document.createElement("p");
    let dishTextNode = document.createTextNode("lorem ipsum");
    let prepHeader = document.createElement("header");
    let prepText = document.createElement("p");
    let prepTextNode = document.createTextNode(dish.description);

    // set div col-md
    div.classList.add("col-md-12");
    div1.classList.add("col-md-2");
    div2.classList.add("col-md-5");
    div3.classList.add("col-md-5");

    // append
    div1.appendChild(image);
    div2.appendChild(dishHeader);
    div2.appendChild(dishText);
    div3.appendChild(prepHeader);
    div3.appendChild(prepText);

    prepText.appendChild(prepTextNode);
    dishText.appendChild(dishTextNode);

    div.append(div1);
    div.append(div2);
    div.append(div3);
    document.body.appendChild(div);
  }
}