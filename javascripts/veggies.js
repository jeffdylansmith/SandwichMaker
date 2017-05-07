var SandwichMaker = (function(newSandwichMaker) {
  
  var veggieparts =
  {
    onion_veggie: .9,
    greenPepper_veggie: .8,
    bananaPepper_veggie: .7,
    lettuce_veggie: .6,
    tomato_veggie: .7
  }  

  
    // Augment the original object with another method
    newSandwichMaker.addVeggie = function(name) {
      var veggieOrder = 0;
      veggieOrder += veggieparts[name];
      return veggieOrder;
    }
  

  return newSandwichMaker;
})(SandwichMaker);