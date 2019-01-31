window.onload = () => {
  // We instantiate our model
  const model = new DinnerModel();
  /* TEST CODE */
  model.addDishToMenu(1);

  generalController = new GeneralController([], {});
  let activeViews = [];
  // And create the instance of ExampleView
  // const exampleView = new ExampleView(document.querySelector("#exampleView"));

  // make an object with the html-doms relevant to the welcomeView

  const welcomeView = new WelcomeView($("#welcomeView"), model);
  const welcomeCtrl = new WelcomeCtrl(welcomeView, generalController);
  //welcomeView.hide();

  const backView = new BackView($("#backView"), model);
  const backCtrl = new BackCtrl(backView, model, generalController);
  //backView.hide();

  const sideBarView = new SideBarView($("#sideBarView"), model);
  const sidebarCtrl = new SideBarCtrl(sideBarView, model, generalController);
  //sideBarView.hide();

  const dishSearchView = new DishSearchView($("#dishSearchView"), model);
  //dishSearchView.hide();

  const dishItemView = new DishItemView($("#dishItemView"), model);
  //dishItemView.hide();

  const dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  //dishDetailsView.hide();

  const dishFinishedView = new DishFinishedView($("#dishFinishedView"), model);
  //dishFinishedView.hide();

  const dishPrintView = new DishPrintView($("#dishPrintView"), model);

  const allViews = [welcomeView, backView, sideBarView, dishSearchView, dishDetailsView, dishFinishedView, dishPrintView];
  //dishPrintView.hide();
  allViews.forEach(view => { generalController.addView(view) });
  /*
  generalController.addView(welcomeView);
  generalController.addView(backView);
  generalController.addView(sideBarView);
  generalController.addView(dishSearchView);
  generalController.addView(dishDetailsView);
  generalController.addView(dishFinishedView);
  generalController.addView(dishPrintView);
  */
  generalController.hideAll();

  generalController.addScreen("welcome", [welcomeView]);

  generalController.showScreen("welcome");

  generalController.addScreen("select_dish", [sideBarView, dishSearchView, dishItemView]);
  generalController.addScreen("dinner_overview", [backView, dishFinishedView]);
  generalController.addScreen("dish_details", [sideBarView, dishDetailsView]);
  generalController.addScreen("dish_printout", [backView, dishPrintView]);

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */
};

class GeneralController {
  constructor(views, screens) {
    this.views = views;   // array of view
    this.screens = screens; // object of views(array of view)
  }

  hideAll() {
    this.views.forEach((view) => {
      view.hide();
    });
  };

  addView(view) {
    this.views.push(view);
  }

  addScreen(name, views) {
    this.screens[name] = views;
  }

  showScreen(name) {
    this.hideAll();
    this.screens[name].forEach((view) => {
      view.show();
    });
  }
};
