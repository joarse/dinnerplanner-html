class BackView {

  constructor(container, model) {
    this.container = container;
    this.model = model;

    model.addObserver(this);
  }

  init() {
    this.container.find("#numberOfGuests").html(
      "My dinner: " + this.model.getNumberOfGuests() + " people");
    this.container.find("#backButton").html("Go back and edit dinner");
  }

  update(args) {
    switch(args) {
      case 'numberOfGuests':
        this.init();
        break;
    }
  }

  show() {
    this.container.show();
    this.init();
  }

  hide() {
    this.container.hide();
  }
}
