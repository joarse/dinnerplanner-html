class LoadingView {
  constructor(container, generalController) {
    this.container = container;
    this.generalController = generalController;
  }

  hide() {
    this.container.hide();
  }

  show() {
    this.container.show();
  }
}