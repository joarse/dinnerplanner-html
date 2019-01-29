window.onload= function() {
  // We instantiate our model
  const model = new DinnerModel();

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


  let backViewContainers = {};
  // make an object with the html-doms relevant to the welcomeView
  backViewContainers.container = $("#backView");
  backViewContainers.header = $("#numberOfGuests");
  backViewContainers.button = $("#backButton");

  const backView = new BackView(backViewContainers, model);
  const backCtrl = new BackCtrl(backView);
  backCtrl.init();


  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */
};
