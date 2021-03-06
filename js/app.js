window.onload = () => {
  // Initiate model
  const model = new DinnerModel();

  // Initiate general controller
  const generalController = new GeneralController([], {});

  // Init views
  const welcomeView = new WelcomeView($("#welcomeView"), model);
  const loadingView = new LoadingView($("#spinner"), generalController);
  const backView = new BackView($("#backView"), model);
  const sideBarView = new SideBarView($("#sideBarView"), model, generalController);
  const dishSearchView = new DishSearchView($("#dishSearchView"), model);
  const dishItemView = new DishItemView($("#dishItemView"), model, generalController);
  const dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  const dishFinishedView = new DishFinishedView($("#dishFinishedView"), model);
  const dishPrintView = new DishPrintView($("#dishPrintView"), model);

  // Init controllers
  const welcomeCtrl = new WelcomeCtrl(welcomeView, model, generalController);
  const backCtrl = new BackCtrl(backView, model, generalController);
  const sideBarCtrl = new SideBarCtrl(sideBarView, model, generalController);
  const dishSearchCtrl = new DishSearchCtrl(dishSearchView, model, generalController);
  const dishDetailsCtrl = new DishDetailsCtrl(dishDetailsView, model, generalController);
  const dishFinishedCtrl = new DishFinishedCtrl(dishFinishedView, model, generalController);

  // adding views to general state controller
  const allViews = [welcomeView, loadingView, backView, sideBarView, dishSearchView, dishDetailsView, dishFinishedView, dishPrintView];
  allViews.forEach(view => { generalController.addView(view)});
  generalController.hideAll();

  // adding screens to general state controllers
  generalController.addScreen("WELCOME", [welcomeView]);
  generalController.addScreen("LOADING", [loadingView]);
  generalController.addScreen("SELECT_DISH", [sideBarView, dishSearchView, dishItemView]);
  generalController.addScreen("DISH_OVERVIEW", [backView, dishFinishedView]);
  generalController.addScreen("DISH_DETAILS", [sideBarView, dishDetailsView]);
  generalController.addScreen("DISH_PRINTOUT", [backView, dishPrintView]);

  generalController.showScreen("WELCOME");
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

  // Each controller will call this function to tell the generalController
  // what it has done and request for the routing.
  // state: the state it has done
  // args: array of arguments for routing
  confirmState(state) {
    switch (state) {
      case "HOME":
        this.showScreen("WELCOME");
      break;
      case "BACK":
      case "ADD_TO_MENU":
        this.showScreen("SELECT_DISH");
      break;
      case "WELCOME":
      case "SEARCHED":
        this.showScreen("LOADING");
      break;
      case "CLICK_DISH":
        this.showScreen("DISH_DETAILS");
      break;
      case "CONFIRM_MENU":
        this.showScreen("DISH_OVERVIEW");
      break;
      case "FINISH_MENU":
        this.showScreen("DISH_PRINTOUT");
        break;
    }
  }
};
