var SandwichMaker = (function(newSandwichMaker) {
  
  var cheeseparts =
  {
    american_cheese: .9,
    cheddar_cheese: .8,
    provolone_cheese: .7,
    swiss_cheese: .6
  }  

  
    // Augment the original object with another method
    newSandwichMaker.addCheese = function(name) {
      var cheeseOrder = 0;
      cheeseOrder += cheeseparts[name];
      return cheeseOrder;
    }
  

  return newSandwichMaker;
})(SandwichMaker);