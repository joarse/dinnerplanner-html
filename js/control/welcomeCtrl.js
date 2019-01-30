class WelcomeCtrl {

  constructor(welcomeView, generalController) {
    this.welcomeView = welcomeView;
    this.welcomeView.container.find("#startButton").click(event => {
      // should notify the general state controller that welcomeview is hidden
      // and the next scre
      generalController.showScreen("select_dish");
    });
  }
}