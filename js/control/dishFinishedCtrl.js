
class DishFinishedCtrl {

  constructor(dishFinishedView, model, generalController) {
    dishFinishedView.container.find("#printButton").click(event => {
      generalController.showScreen("dish_printout");
    });
  }
}