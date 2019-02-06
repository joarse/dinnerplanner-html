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

      // TODO: add spinner
      this.model.getAll(text, option)
      .then((dishes) => {
        this.model.dishes = dishes;
        // update the searchedInfo (text, option) in the model
        this.model.setSearchedInfo(text, option);
        // TODO: rm the spinner
        generalController.confirmState("SEARCHED");
      });
    });
  }
}
