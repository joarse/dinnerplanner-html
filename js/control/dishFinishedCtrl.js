
class DishFinishedCtrl {

  constructor(dishFinishedView, model, generalController) {
    dishFinishedView.container.find("#printButton").click(event => {
      generalController.confirmState("FINISH_MENU");
    });
  }
}