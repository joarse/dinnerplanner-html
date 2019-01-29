class WelcomeView{

  constructor(containers, model) {
    // containers are objects with html-doms that the view needs to access
    // model is data
    this.container = containers.container ;
    this.text = containers.text;
    this.button = containers.button;
    this.model = model;
  }

  update() {
    this.text.html(this.model.lorem);
    this.button.html("Start Button");
  }
}