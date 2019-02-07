class DishSearchCtrl {

  constructor(dishSearchView, model, generalController) {
    this.dishSearchView = dishSearchView;
    this.model = model;
    this.generalController = generalController;

    this.bindSearchButton();
  }

  bindSearchButton() {
    const searchButton = this.dishSearchView.container.find("#searchButton");
    searchButton.click((e) => {
      const text = this.dishSearchView.container.find("#inputText").val();
      const option = this.dishSearchView.container.find("option:selected").val();

      // add the spinner
      this.generalController.confirmState("SEARCHED");
      this.model.getRecipesRawInfo(this.model.numOfDishesShown, text, option)
      .then((dishes) => {
        this.model.dishesRawInfo = dishes;
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
