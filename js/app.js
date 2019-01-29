window.onload= function() {
  // We instantiate our model
  const model = new DinnerModel();

  // And create the instance of ExampleView
  // const exampleView = new ExampleView(document.querySelector("#exampleView"));

  let welcomeViewContainer = {};
  // make an object with the html-doms relevant to the welcomeView
  welcomeViewContainer.container = $("#welcomeView");
  welcomeViewContainer.text = $("#welcomeText");
  welcomeViewContainer.button = $("#startButton");

  // set a if null condition
  const welcomeView = new WelcomeView(welcomeViewContainer, model);
  const welcomeCtrl = new WelcomeCtrl(welcomeView);
  welcomeCtrl.init();

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */
};
