class WelcomeView{

  constructor(container, model) {
    // containers are objects with html-doms that the view needs to access
    // model is data

    this.container = container;
    this.model = model;
    this.model.addObserver(this);

    this.buffer;
  }

  init() {
    this.container.find("#welcomeText").html(this.model.lorem);
    this.container.find("#startButton").html("Start Button");
  }

  initLoading() {
    const loadingView = `
    <div class="row justify-content-center">
      <div class="spinner-border" role="status" id="spinner">
        <span class="sr-only">Loading...</span>
      </div>
    </div>`;

    return $(loadingView);
  }

  startLoading() {
    const loadingView = this.initLoading();
    this.buffer = this.container.children();
    console.log(this.buffer);
    this.container.empty();
    this.container.append(loadingView);
    this.container.show();
  }

  stopLoading() {
    this.container.empty();
    this.container.append(this.buffer);
    this.container.show();
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