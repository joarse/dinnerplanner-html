window.onload= function() {
  // We instantiate our model
  const model = new DinnerModel();
  /* TEST CODE */
  model.addDishToMenu(1);

  // And create the instance of ExampleView
  // const exampleView = new ExampleView(document.querySelector("#exampleView"));

  let welcomeViewContainers = {};
  // make an object with the html-doms relevant to the welcomeView
  welcomeViewContainers.container = $("#welcomeView");
  welcomeViewContainers.text = $("#welcomeText");
  welcomeViewContainers.button = $("#startButton");

  // set a if null condition
  const welcomeView = new WelcomeView(welcomeViewContainers, model);
  const welcomeCtrl = new WelcomeCtrl(welcomeView);
  welcomeCtrl.init();


  const backView = new BackView($("#backView"), model);
  const backCtrl = new BackCtrl(backView, model);
  backView.show();


 
  const sideBarView = new SideBarView($("#sideBarView"), model);
  const sidebarCtrl = new SideBarCtrl(sideBarView, model);

  

  const dishSearchView = new DishSearchView($("#dishSearchView"), model);
  dishSearchView.hide();

  const dishItemView = new DishItemView($("#dishItemView"), model);
  dishItemView.hide();

  const dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
  dishDetailsView.hide();

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */
};
