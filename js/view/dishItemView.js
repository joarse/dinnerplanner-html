
class DishItemView {
  // this class should only make the image and label of the 
  // dish but be used in several other views
  constructor(containers, model) {
    this.dishes = {
      starters: model.getAllDishes("starters"),
      mainDishes: model.getAllDishes("main dish"),
      desserts: model.getAllDishes("desserts")
    };

    this.container = containers.container;

    Object.values(this.dishes).forEach(type => {
      // should make and append a image w/ labe
      // for each dish in database
      type.forEach(dish => {
        this.container.appendChild(this.update(dish));
      });
    });

  }

  update(dish) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    let label = document.createElement("label");

    label.innerHTML = dish.name;
    image.src = "./images" + dish.image;
    div.classList.add("col-md-3");
    div.appendChild(image);
    div.appendChild(label);
    return div;
  }
}