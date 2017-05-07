var SandwichMaker = (function(newSandwichMaker) {
  
  var condimentparts =
  {
    mayo: .9,
    mustard: .8,
    ketchup: .7,
    hotSauce: .6,
    horseRadish: .7
  }  

  
    // Augment the original object with another method
    newSandwichMaker.addCondiments = function(name) {
      var condimentOrder = 0;
      condimentOrder += condimentparts[name];
      return condimentOrder;
    }
  

  return newSandwichMaker;
})(SandwichMaker);