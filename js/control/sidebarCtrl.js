
class SideBarCtrl {

  constructor(sidebarView, model) {
    this.sidebarView = sidebarView;
    this.model = model;

    this.sidebarView.container.find("#guestInput").change(event => {
      this.model.setNumberOfGuests(event.target.value);
    });
  }
}