

class SideBarView {

  constructor(container, model, generalController) {
    this.container = container;
    this.model = model;
    this.generalController = generalController;
    model.addObserver(this);
  }

  init() {
    this.container.find("#guestInput").val(this.model.getNumberOfGuests());
    this.container.find("#menuCost").html(this.model.getTotalMenuPrice() + " SEK");

    this.container.find("#appendDishes").empty(); // it redraws the doms
    this.model.getFullMenu().forEach(dish => {
      this.container.find("#appendDishes").append(this.createDom(dish));
      // dynamiclly make a new controller for each dish 
    });

  }
  update(model, args) {
    switch (args) {
      case "numberOfGuests":
        this.init();
        break;
      case "menu":
        if (model.getFullMenu() === undefined || model.getFullMenu().length == 0) {
          this.disableBtn();
        }
        else {
          this.enableBtn();
        }
        this.init();
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

  enableBtn() {
    this.container.find("#sidebarBtn").removeAttr("disabled");
  }

  disableBtn() {
    this.container.find("#sidebarBtn").attr("disabled", true);

  }

  createDom(dish) {
    let div = $("<tr>", { "id": dish.id });
    div.append($("<td>", { "class": "float-left" }).html(dish.name));
    div.append($("<td>").html(this.model.getPrice(dish.id)*(this.model.getNumberOfGuests())));
    // contoller has to be dynamic since the div is created dynamiclly
    let sideBarMenuCtrl = new SideBarMenuCtrl(this, div, this.model, this.generalController);
    sideBarMenuCtrl.bind();
    return div;
  }

  removeDish(container) {
    container.remove();
  }
}