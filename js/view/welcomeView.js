class WelcomeView{

  constructor(container, model) {
    // containers are objects with html-doms that the view needs to access
    // model is data

    this.container = container;
    this.model = model;

  }

  update() {
    this.container.find("#welcomeText").html(this.model.lorem);
    this.container.find("#startButton").html("Start Button");
  }

  show() {
    this.container.show();
  }

  hide() {
    this.container.hide();
  }
}