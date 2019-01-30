class WelcomeCtrl {

  constructor(welcomeView) {
    this.welcomeView = welcomeView;
    this.welcomeView.container.find("#startButton").click(event => {
      // should notify the general state controller that welcomeview is hidden
      // and the next scre
    });
  }
}