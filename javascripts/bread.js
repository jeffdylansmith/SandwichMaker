
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function() {
	
  var breadparts =
  {
    white_bread: .9,
    wheat_bread: .8,
    honeyOat_bread: .7,
    rye_bread: .6
  }  

  return {
    // Augment the original object with another method
    addBread : function(name) {
      var breadOrder = 0;
    	breadOrder += breadparts[name];
      return breadOrder;
    }
  }

})();