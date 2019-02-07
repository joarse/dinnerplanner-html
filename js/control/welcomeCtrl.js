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
      this.welcomeView.startLoading();
      this.model.getRecipesRawInfo(this.model.numOfDishesShown, "burger", "main course")
      .then(res => {
        this.model.dishesRawInfo = res;
        // rm the spinner
        this.welcomeView.stopLoading();
        this.generalController.confirmState("BACK");
      })
      .catch((e) => {
        console.log(e);
        alert("There's some error in after fetching raw info");
        // redirect
        this.generalController.confirmState("HOME");
      });
    });
  }
}