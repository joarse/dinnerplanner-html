class BackCtrl {

  constructor(backView, model, generalController) {
    backView.container.find("#backButton").click(event => {
      // should notify the general state controller that welcomeview is hidden
      // and the next scre
      generalController.confirmState("BACK");
    });
  }
}