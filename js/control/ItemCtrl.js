class ItemCtrl {

  constructor(itemView, model, generalController) {
    this.itemView = itemView;
    this.model = model;
    this.generalController = generalController;
  }

  bind() {
    this.itemView.container.click((e) => {
      this.model.selectedDishItem = this.itemView.container.attr("id");
      this.generalController.confirmState("CLICK_DISH");
    });
  }
}
