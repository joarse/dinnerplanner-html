class WelcomeCtrl {

  constructor(welcomeView, generalController) {
    this.welcomeView = welcomeView;
    this.generalController = generalController;

    this.bindWelcomeButton();
  }

  bindWelcomeButton() {
    this.welcomeView.container.find("#startButton").click(event => {
      // should notify the general state controller that welcomeview is hidden
      // and the next scre
      generalController.confirmState("WELCOME");
    });
  }
}