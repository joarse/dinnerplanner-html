

class SideBarView {

  constructor(container, model) {
    this.container = container;
    this.model = model;
    model.addObserver(this);
    this.init();
  }

  init() {
    this.container.find("#guestInput").val(this.model.getNumberOfGuests()); 
    this.container.find("#menuCost").html(this.model.getTotalMenuPrice() + " SEK");
  }
  update(args) {
    switch (args) {
      case "numberOFGuests":
        this.init();
        break;
      case "menu":
        this.container.find("#appendDishes");
        // add a container and a span with correct information

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
}