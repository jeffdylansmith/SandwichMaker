var SandwichMaker = (function(newSandwichMaker) {
  
  var meatparts =
  {
    ham_meat: .9,
    turkey_meat: .8,
    roastBeef_meat: .7,
    salami_meat: .6,
    spam_meat: .7
  }  

  
    // Augment the original object with another method
    newSandwichMaker.addMeat = function(name) {
      var meatOrder = 0;
      meatOrder += meatparts[name];
      return meatOrder;
    }
  

  return newSandwichMaker;
})(SandwichMaker);


