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
      this.model.getAll(20, text, option)
      .then((dishes) => {
        this.model.dishes = dishes;
        // update the searchedInfo (text, option) in the model
        this.model.setSearchedInfo(text, option);
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
