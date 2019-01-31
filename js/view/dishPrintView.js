

class DishPrintView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
  }

  init() {
    this.container.empty();
    let menu = this.model.getFullMenu();
    menu.forEach(dish => {
      this.createDom(dish);
    });
  }

  createDom(dish) {
    // method that creates html-doms displaying a dish
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let image = document.createElement("img");
    let dishHeader = document.createElement("header");
    let dishText = document.createElement("p");
    let dishTextNode = document.createTextNode(this.model.lorem);
    let prepHeader = document.createElement("header");
    let prepText = document.createElement("p");
    let prepTextNode = document.createTextNode(dish.description);

    image.src = "./images/" + dish.image;
    prepHeader.innerHTML = "Preperation";
    dishHeader.innerHTML = dish.name;

    

    // set div col-md
    div.classList.add("row");
    div1.classList.add("col-2");
    div2.classList.add("col-5");
    div3.classList.add("col-5");

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
    this.container.append(div);
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
      case "numberOFGuests":
        break;
      case "menu":
        break;
    }
  }
}