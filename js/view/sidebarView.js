

class SideBarView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    model.addObserver(this);
    this.init();
  }

  init() {
    this.container.find("#guestInput").val(this.model.getNumberOfGuests()); 
    this.container.find("#test").html(this.model.getNumberOfGuests()); 
    this.container.find("#menuCost").html(this.model.getTotalMenuPrice() + " SEK");
    this.container.find("#appendDishes");

  }
  update(model, args) {
    // ask TA about model as param
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
}