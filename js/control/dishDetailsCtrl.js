
class DishDetailsCtrl {

  constructor(dishDetailsView, model, generalController) {
    dishDetailsView.container.find("#addToMenuBtn").click(event => {
      model.addDishToMenu(model.selectedDishItem); 
      generalController.showScreen("select_dish");
    });

    dishDetailsView.container.find("#backToSearchBtn").click(event => {
      generalController.showScreen("select_dish");
    });
  }
}