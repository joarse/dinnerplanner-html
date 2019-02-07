class DishItemCtrl {

  constructor(dishItemView, model, generalController) {
    this.dishItemView = dishItemView;
    this.model = model;
    this.generalController = generalController;
  }

  bind() {
    this.dishItemView.container.find(".dish").toArray().forEach(item => {
      $(item).click(e => {
        const id = $(e.currentTarget).attr("id");
        this.model.selectedDishItem = id;

        // get detailed info of one dish
        // getDish from model if it exists
        if(Object.keys(this.model.dishes).includes(id)) {
          this.generalController.confirmState("CLICK_DISH");
        }
        else {
          // add spinner
          this.dishItemView.startLoading();
          this.model.getDetailedInfo(id)
          .then(data => {
            this.model.parseDish(data);
          })
          .catch(e => {
            alert("There's something wrong in fetching dish!!!");
            console.log(e)
            // redirect
            this.generalController.confirmState("BACK");
          })
          .then(res => {
            // rm spinner
            this.dishItemView.stopLoading();
            this.generalController.confirmState("CLICK_DISH");
          });
        }
      });
    });
  }

}
