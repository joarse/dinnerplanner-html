

class WelcomeView{

  constructor(containers, model) {
    // containers are objects with html-doms that the view needs to access
    // model is data
    this.container = containers.container ;
    this.text = containers.text;
    this.button = containers.button;
    this.model = model;

    this.text.innerHTML = "lorem ipsum";
    this.button.innerHTML = "Start Button";
  }



}