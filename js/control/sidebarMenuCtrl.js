class SideBarMenuCtrl {

  constructor(sidebarView, dishdiv, model, generalController) {
    this.sidebarView = sidebarView;
    this.dishdiv = dishdiv;
    this.model = model;
    this.generalController = generalController;
  }

  bind() {
    this.dishdiv.click(e => {
      this.model.removeDishFromMenu(this.dishdiv.attr("id"));
      this.sidebarView.removeDish(this.dishdiv);
    });
  }
}