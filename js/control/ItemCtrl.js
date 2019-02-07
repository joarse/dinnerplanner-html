class ItemCtrl {

  constructor(itemView, model, generalController) {
    this.itemView = itemView;
    this.model = model;
    this.generalController = generalController;
  }

  bind() {
    this.itemView.container.click((e) => {
      const id = this.itemView.container.attr("id");
      this.model.selectedDishItem = id;

      // get detailed info of one dish
      // TODO: getDish from model if it exists
      // TODO: add spinner
      this.model.getDetailedInfo(id)
      .then(data => {
        this.model.parseDish(data);
      })
      .catch(e => {
        alert("There's something wrong in fetching dish!!!");
        // TODO: redirect
        console.log(e)
      })
      .then(res => {
        // TODO: rm spinner
        this.generalController.confirmState("CLICK_DISH");
      });
    });
  }
}
