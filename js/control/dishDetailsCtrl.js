
class DishDetailsCtrl {

  constructor(dishDetailsView, model, generalController) {
    dishDetailsView.container.find("#addToMenuBtn").click(event => {
      model.addDishToMenu(model.selectedDishItem);
      generalController.confirmState("ADD_TO_MENU");
    });

    dishDetailsView.container.find("#backToSearchBtn").click(event => {
      generalController.confirmState("BACK");
    });
  }
}