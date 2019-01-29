

class BackView {
  constructor(containers, model) {
    this.container = containers.container;
    this.header = containers.header;
    this.btn = containers.btn;

    this.numberOfguests = model.getNumberOfguests();
    
  }
  update() {
    this.header.innerHTML = "My dinner: " + this.numberOfguests + " people";
    this.btn.innerHTML = "Go back and edit dinner";
  }
}