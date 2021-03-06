class Observable{

  constructor(){
    this._observers = [];
  }

  addObserver(observer){
    this._observers.push(observer);
  }

  notifyObservers(changeDetails) {
    for(var i=0; i<this._observers.length; i++) {
      this._observers[i].update(this, changeDetails);
    }
  }

  removeObserver(observer) {  /* remove observer from array */
    delete this._observers[observer];
  }
}


//DinnerModel Object constructor
class DinnerModel extends Observable {

  constructor(){
    super();
    this.dishes = {};
    this.numOfDishesShown = 20;
    this.dishesRawInfo;

    // API Key & Endpoint
    this.apiKey = "";
    const apiEndpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com";
    this.endpoints = {
      "search": `${apiEndpoint}/recipes/search`,
      "information": `${apiEndpoint}/recipes`
    };

    //TODO Lab 1 implement the data structure that will hold number of guest
    // and selected dishes for the dinner menu
    this.numberOfGuests = 1;
    // It is called "menu" by TA,
    // key: id
    // value: dish object
    this.selectedDishes = {};

    // stores the dish item selected
    this.selectedDishItem = -1;
    this.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }

  setNumberOfGuests(num) {
    //TODO Lab 1
    if (num > 0) {
      this.numberOfGuests = num;
    }
    else {
      this.numberOfGuests = 1;
    }
    this.notifyObservers("numberOfGuests");
  }

  getNumberOfGuests() {
    //TODO Lab 1
    return this.numberOfGuests;
  }

  //Returns the dish that is on the menu for selected type
  getSelectedDish(type) {
    //TODO Lab 1
    let selectedDish = undefined;
    Object.values(this.selectedDishes).forEach((dish) => {
      if (dish.type === type) {
        selectedDish = dish;
      }
    });

    return selectedDish;
  }

  getDishesRawInfo() {
    return this.dishesRawInfo;
  }

  //Returns all the dishes on the menu.
  getFullMenu() {
    //TODO Lab 1
    return Object.values(this.selectedDishes);
  }

  //Returns all ingredients for all the dishes on the menu.
  getAllIngredients() {
    //TODO Lab 1
    let allIngredients = {};
    Object.values(this.selectedDishes).forEach((dish) => {
      dish.ingredients.forEach((ingredient) => {
        if (!allIngredients.hasOwnProperty(ingredient.name)) {
          allIngredients[ingredient.name] = 1;
        }
        else {
          allIngredients[ingredient.name]++;
        }
      });
    });

    return Object.keys(allIngredients);
  }

  // Returns ingredients(array) of a specific dish
  getIngredients(id) {
    return this.getDish(id).ingredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  getTotalMenuPrice() {
    //TODO Lab 1
    let price = 0;
    Object.values(this.selectedDishes).forEach((dish) => {
      dish.ingredients.forEach((ingredient) => {
        price += ingredient.price;
      });
    });

    return price * this.getNumberOfGuests();
  }

  // get price of a dish
  getPrice(id) {
    const ingredients = this.getIngredients(id);
    let totalPrice = 0;
    ingredients.forEach((ingredient) => {
      totalPrice += ingredient.price;
    });

    return totalPrice;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  addDishToMenu(id) {
    //TODO Lab 1
    const dish = this.getDish(id);

    const foundDish = Object.values(this.selectedDishes).find((selectedDish) => {
      return selectedDish.type == dish.type;
    });
    //if (foundDish) this.removeDishFromMenu(foundDish.id);
    this.selectedDishes[id] = dish;
    this.notifyObservers("menu");
  }

  //Removes dish from menu
  removeDishFromMenu(id) {
    //TODO Lab 1
    delete this.selectedDishes[id];
    this.notifyObservers("menu");
  }

  // get {ID, name, image} of recipes from endpoint
  // ret: array of {id, name, image}
  getRecipesRawInfo(number, text, option) {
    const endpoint = `${this.endpoints.search}?number=${number}&query=${text}&type=${option}`;

    return fetch(endpoint, {
      headers: {
          "X-Mashape-Key": this.apiKey
        }
      })
      .then(response => response.json())
      .catch(error => console.log(`Error on getting data from ${endpoint}`))
      .then((x) => {
        let ret = [];
        const response = x.results;
        response.forEach(e => ret.push({
          "id": e.id,
          "name": e.title,
          "image": x.baseUri + e.image
        }));

        return ret;
      })
      .catch(e => {
        alert("There's something wrong while handling data of raw info");
        console.log(e);
      });
  }

  getDetailedInfo(id) {
    const endpoint = `${this.endpoints.information}/${id}/information`;

    return fetch(`${endpoint}?includeNutrition=false`, {
      headers: {
          "X-Mashape-Key": this.apiKey
        }
      })
      .then(response => response.json())
      .catch(e => {
        alert("There's something wrong while getting detailed info of a dish");
        console.log(e);
      });
  }

  // getRecipesInformation(ids) {
  //   const endpoint = this.endpoints.informationBulk;

  //   return fetch(`${endpoint}?ids=${ids.join()}&includeNutrition=false`, {
  //     headers: {
  //         "X-Mashape-Key": this.apiKey
  //       }
  //     })
  //     .then(response => response.json())
  // }

  parseDish(dish) {
    let ingredients = dish.extendedIngredients;
    let ingrArr = [];
    ingredients.forEach(ingredient => {
      ingrArr.push({
        "name": ingredient.name,
        "quantity": ingredient.amount,
        "unit": ingredient.unit,
        "price": 1
      });
    });

    const parsedDish = {
      "id": dish.id,
      "name": dish.title,
      "image": dish.image,
      "type": dish.dishType,
      "description": dish.instructions,
      "ingredients": ingrArr
    }

    this.dishes[dish.id] = parsedDish;
  }

  // For endpoints
  // getAll(number, text, option) {
  //   return this.getRecipesID(20, text, option)
  //     .catch(e => console.log(`Error on getRecipesID: ${e}`))
  //     .then(ids => this.getRecipesInformation(ids))
  //     .catch(e => console.log(`Error on getRecipesInformation: ${e}`))
  //     .then(data => this.parseDishesFromEndpoint(data))
  //     .catch(e => console.log(`Error on parseDishesFromEndpoint: ${e}`));
  // }

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  getAllDishes(type, filter) {
    return this.dishes.filter((dish) => {
      let found = true;

      if (filter) {
        found = false;
        filter = filter.toLowerCase();
        dish.ingredients.forEach((ingredient) => {
          if(ingredient.name.toLowerCase().indexOf(filter) != -1) {
            found = true;
          }
        });
        if (dish.name.toLowerCase().indexOf(filter) != -1) {
          found = true;
        }
      }
      // with the API, dish.type is an array so this is changed
      return (!type || dish.type.includes(type)) && found;
    });
  }

  //function that returns a dish of specific ID
  getDish(id) {
    return Object.values(this.dishes).find(dish => {
      return dish.id == id;
    });
  }
}

// the dishes constant contains an array of all the
// dishes in the database. Each dish has id, name, type,
// image (name of the image file), description and
// array of ingredients. Each ingredient has name,
// quantity (a number), price (a number) and unit (string
// defining the unit i.e. "g", "slices", "ml". Unit
// can sometimes be empty like in the example of eggs where
// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
const dishesConst = [{
  "id":1,
  "name":"French toast",
  "type":"starter",
  "image":"toast.jpg",
  "description":"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
  "ingredients":[{
    "name":"eggs",
    "quantity":0.5,
    "unit":"",
    "price":10
  },{
    "name":"milk",
    "quantity":30,
    "unit":"ml",
    "price":6
  },{
    "name":"brown sugar",
    "quantity":7,
    "unit":"g",
    "price":1
  },{
    "name":"ground nutmeg",
    "quantity":0.5,
    "unit":"g",
    "price":12
  },{
    "name":"white bread",
    "quantity":2,
    "unit":"slices",
    "price":2
  }]
},{
  "id":2,
  "name":"Sourdough Starter",
  "type":"starter",
  "image":"sourdough.jpg",
  "description":"Here is how you make it... Lore ipsum...",
  "ingredients":[{
    "name":"active dry yeast",
    "quantity":0.5,
    "unit":"g",
    "price":4
  },{
    "name":"warm water",
    "quantity":30,
    "unit":"ml",
    "price":0
  },{
    "name":"all-purpose flour",
    "quantity":15,
    "unit":"g",
    "price":2
  }]
},{
  "id":3,
  "name":"Baked Brie with Peaches",
  "type":"starter",
  "image":"bakedbrie.jpg",
  "description":"Here is how you make it... Lore ipsum...",
  "ingredients":[{
    "name":"round Brie cheese",
    "quantity":10,
    "unit":"g",
    "price":8
  },{
    "name":"raspberry preserves",
    "quantity":15,
    "unit":"g",
    "price":10
  },{
    "name":"peaches",
    "quantity":1,
    "unit":"",
    "price":4
  }]
},{
  "id":100,
  "name":"Meat balls",
  "type":"main dish",
  "image":"meatballs.jpg",
  "description":"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
  "ingredients":[{
    "name":"extra lean ground beef",
    "quantity":115,
    "unit":"g",
    "price":20
  },{
    "name":"sea salt",
    "quantity":0.7,
    "unit":"g",
    "price":3
  },{
    "name":"small onion, diced",
    "quantity":0.25,
    "unit":"",
    "price":2
  },{
    "name":"garlic salt",
    "quantity":0.7,
    "unit":"g",
    "price":2
  },{
    "name":"Italian seasoning",
    "quantity":0.6,
    "unit":"g",
    "price":3
  },{
    "name":"dried oregano",
    "quantity":0.3,
    "unit":"g",
    "price":3
  },{
    "name":"crushed red pepper flakes",
    "quantity":0.6,
    "unit":"g",
    "price":3
  },{
    "name":"Worcestershire sauce",
    "quantity":6,
    "unit":"ml",
    "price":7
  },{
    "name":"milk",
    "quantity":20,
    "unit":"ml",
    "price":4
  },{
    "name":"grated Parmesan cheese",
    "quantity":5,
    "unit":"g",
    "price":8
  },{
    "name":"seasoned bread crumbs",
    "quantity":15,
    "unit":"g",
    "price":4
  }]
},{
  "id":101,
  "name":"MD 2",
  "type":"main dish",
  "image":"bakedbrie.jpg",
  "description":"Here is how you make it... Lore ipsum...",
  "ingredients":[{
    "name":"ingredient 1",
    "quantity":1,
    "unit":"pieces",
    "price":8
  },{
    "name":"ingredient 2",
    "quantity":15,
    "unit":"g",
    "price":7
  },{
    "name":"ingredient 3",
    "quantity":10,
    "unit":"ml",
    "price":4
  }]
},{
  "id":102,
  "name":"MD 3",
  "type":"main dish",
  "image":"meatballs.jpg",
  "description":"Here is how you make it... Lore ipsum...",
  "ingredients":[{
    "name":"ingredient 1",
    "quantity":2,
    "unit":"pieces",
    "price":8
  },{
    "name":"ingredient 2",
    "quantity":10,
    "unit":"g",
    "price":7
  },{
    "name":"ingredient 3",
    "quantity":5,
    "unit":"ml",
    "price":4
  }]
},{
  "id":103,
  "name":"MD 4",
  "type":"main dish",
  "image":"meatballs.jpg",
  "description":"Here is how you make it... Lore ipsum...",
  "ingredients":[{
    "name":"ingredient 1",
    "quantity":1,
    "unit":"pieces",
    "price":4
  },{
    "name":"ingredient 2",
    "quantity":12,
    "unit":"g",
    "price":7
  },{
    "name":"ingredient 3",
    "quantity":6,
    "unit":"ml",
    "price":4
  }]
},{
  "id":200,
  "name":"Chocolat Ice cream",
  "type":"dessert",
  "image":"icecream.jpg",
  "description":"Here is how you make it... Lore ipsum...",
  "ingredients":[{
    "name":"ice cream",
    "quantity":100,
    "unit":"ml",
    "price":6
  }]
},{
  "id":201,
  "name":"Vanilla Ice cream",
  "type":"dessert",
  "image":"icecream.jpg",
  "description":"Here is how you make it... Lore ipsum...",
  "ingredients":[{
    "name":"ice cream",
    "quantity":100,
    "unit":"ml",
    "price":6
  }]
},{
  "id":202,
  "name":"Strawberry",
  "type":"dessert",
  "image":"icecream.jpg",
  "description":"Here is how you make it... Lore ipsum...",
  "ingredients":[{
    "name":"ice cream",
    "quantity":100,
    "unit":"ml",
    "price":6
  }]
}
];
