window.onload= function() {
  // We instantiate our model
  const model = new DinnerModel();

  // And create the instance of ExampleView
  // const exampleView = new ExampleView(document.querySelector("#exampleView"));

  let welcomeViewContainer = {};
  // make an object with the html-doms relevant to the welcomeView
  welcomeViewContainer.container = document.querySelector("#welcomeView");
  welcomeViewContainer.text = document.querySelector("#welcomeText");
  welcomeViewContainer.button = document.querySelector("#startButton");

  // set a if null condition
  let welcomeView;
  if (Object.values(welcomeViewContainer).find(e => e == undefined) === undefined) {
    welcomeView = new WelcomeView(welcomeViewContainer, model);
  }
  welcomeView.update();


  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */

};
