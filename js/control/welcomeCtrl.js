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

      // add the spinner
      this.generalController.confirmState("WELCOME");
      this.model.getAll(20)
      .then(res => {
        this.model.dishes = res;
        // rm the spinner
        this.generalController.confirmState("BACK");
      })
      .catch((e) => {
        console.log(e);
        alert("There's some error about the API");
        this.generalController.confirmState("HOME");
      });
    });
  }
}