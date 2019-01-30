window.onload = () => {
  // We instantiate our model
  const model = new DinnerModel();
  /* TEST CODE */
  model.addDishToMenu(1);

  let activeViews = [];
  // And create the instance of ExampleView
  // const exampleView = new ExampleView(document.querySelector("#exampleView"));

  // make an object with the html-doms relevant to the welcomeView

  const welcomeView = new WelcomeView($("#welcomeView"), model);
  const welcomeCtrl = new WelcomeCtrl(welcomeView);
  welcomeView.hide();

  const backView = new BackView($("#backView"), model);
  const backCtrl = new BackCtrl(backView, model);
  backView.hide();

  const sideBarView = new SideBarView($("#sideBarView"), model);
  const sidebarCtrl = new SideBarCtrl(sideBarView, model);
  sideBarView.hide();

  const dishSearchView = new DishSearchView($("#dishSearchView"), model);
  dishSearchView.hide();

  const dishItemView = new DishItemView($("#dishItemView"), model);
  dishItemView.hide();

  const dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  dishDetailsView.hide();

  const dishFinishedView = new DishFinishedView($("#dishFinishedView"), model);
  dishFinishedView.hide();

  const dishPrintView = new DishPrintView($("#dishPrintView"), model);
  dishPrintView.hide();


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
