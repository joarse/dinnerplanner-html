
class SideBarCtrl {

  constructor(sidebarView, model, generalController) {
    this.sidebarView = sidebarView;
    this.model = model;

    this.sidebarView.container.find("#guestInput").change(event => {
      this.model.setNumberOfGuests(event.target.value);
    });

    this.sidebarView.container.find("#sidebarBtn").click(event => {
      // should notify the general state controller that welcomeview is hidden
      // and the next scre
      generalController.confirmState("CONFIRM_MENU");
    });

    console.log(this.sidebarView.container.find("tbody#appenDishes").children());
    this.sidebarView.container.find().click(e => {
      console.log("ayy");
    });

    this.sidebarView.container.find("#sideBarTable").click(e => {
      console.log("lmao");
    });
  }
}