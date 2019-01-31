class ItemCtrl {

  constructor(itemView, generalController) {
    this.itemView = itemView;
    this.generalController = generalController;
  }

  bind() {
    this.itemView.container.click((e) => {
      const id = this.itemView.container.attr("id");
      this.generalController.showScreen("dish_details");
    });
  }
}
