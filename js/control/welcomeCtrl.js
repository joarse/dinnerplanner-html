class WelcomeCtrl {

  constructor(welcomeView, model, generalController) {
    this.welcomeView = welcomeView;
    this.model = model;
    this.generalController = generalController;

    this.bindWelcomeButton();
  }

  bindWelcomeButton() {
    this.welcomeView.container.find("#startButton").click(event => {
      // should notify the general state controller that welcomeview is hidden
      // and the next scre

      // TODO: add spinner
      this.generalController.confirmState("WELCOME");
      this.model.getAll(20)
      .then(res => {
        this.model.dishes = res;
        // TODO: rm spinner
       this.generalController.confirmState("BACK");
      })
    });
  }
}