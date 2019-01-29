class BackView {
  constructor(containers, model) {
    this.container = containers.container;
    this.header = containers.header;
    this.btn = containers.button;

    this.numberOfguests = model.getNumberOfGuests();

  }
  update() {
    this.header.html("My dinner: " + this.numberOfguests + " people");
    this.btn.html("Go back and edit dinner");
  }
}
