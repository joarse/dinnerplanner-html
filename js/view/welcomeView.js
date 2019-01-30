class WelcomeView{

  constructor(container, model) {
    // containers are objects with html-doms that the view needs to access
    // model is data

    this.container = container;
    this.model = model;
    this.model.addObserver(this);

  }

  init() {
    this.container.find("#welcomeText").html(this.model.lorem);
    this.container.find("#startButton").html("Start Button");
  }

  update(args) {
    // shoundt do anything here
    switch (args) {
      case "numberOFGuests":
        break;
      case "menu":
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