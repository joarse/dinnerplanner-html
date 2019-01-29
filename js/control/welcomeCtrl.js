

class WelcomeCtrl {
  constructor(welcomeView) {
    this.welcomeView = welcomeView;
  }

  init() {
    this.welcomeView.update();
  }
}