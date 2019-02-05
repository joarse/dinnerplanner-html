
class DishSearchCtrl {

  constructor(dishSearchView, model, generalController) {
    this.dishSearchView = dishSearchView;
    this.model = model;
    this.generalController = generalController;

    this.dishSearchView.container.find("#inputText").change(event => {
      console.log(this.dishSearchView.container.find("#inputText")[0].value);
    });

    this.dishSearchView.container.find("#inputSelect").change(event => {
      console.log(this.dishSearchView.container.find("#inputSelect").val());
    });

    this.dishSearchView.container.find("#searchButton").click(event => {
      console.log("Button clicked");
    });
  }
}