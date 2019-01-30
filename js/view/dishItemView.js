
class DishItemView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);

    this.dishes = {
      starters: model.getAllDishes("starter"),
      mainDishes: model.getAllDishes("main dish"),
      desserts: model.getAllDishes("dessert")
    };
    this.init();
  }
  init() {
    Object.values(this.dishes).forEach(type => {
      // should make and append a image w/ labe
      // for each dish in database
      type.forEach(dish => {
        this.container.append(this.createDivs(dish));
      });
    });
  }


  createDivs(dish){
    let div = document.createElement("div");
    let image = document.createElement("img");
    let label = document.createElement("label");
    label.innerHTML = dish.name;
    image.src = "./images/" + dish.image;
    div.classList.add("col-md-3");
    div.appendChild(image);
    div.appendChild(label);
    return div;
    
  }

  update(args) {
 
    switch (args) {
      case "numberOFGuests":
        break;
      case "menu":
        break;
    }
  }

  hide() {
    this.container.hide();
  }

  show() {
    this.container.show();
    this.init();
  }
  
}