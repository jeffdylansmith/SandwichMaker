var total = 0;  
var output = document.getElementById("output");
var printTotal = function(order){
    let newTotal = order / 100;
    output.innerHTML = newTotal;
};
 


var inputList = document.querySelectorAll("input");
    console.log("inputList", inputList);
    for (var i = 0; i < inputList.length; i++){
        inputList[i].addEventListener("click", function(event){
        	console.log("event", event.target.name);
            console.log("event", event.target.className);
            if (event.target.className == "bread" ){
                if (event.target.checked){
        		total += (SandwichMaker.addBread(event.target.name)) * 100;
                } else {
                total -= (SandwichMaker.addBread(event.target.name)) * 100;
                }
            }
            if (event.target.className == "cheese" ){
                if (event.target.checked){
                total += (SandwichMaker.addCheese(event.target.name)) * 100;
                } else {
                total -= (SandwichMaker.addCheese(event.target.name)) * 100;
                }
            }
            if (event.target.className == "meat" ){
                if (event.target.checked){
                total += (SandwichMaker.addMeat(event.target.name)) * 100;
                } else {
                total -= (SandwichMaker.addMeat(event.target.name)) * 100;
                }
            }
            if (event.target.className == "veggie" ){
                if (event.target.checked){
                total += (SandwichMaker.addVeggie(event.target.name)) * 100;
                } else {
                total -= (SandwichMaker.addVeggie(event.target.name)) * 100;
                }
            }
            if (event.target.className == "condiments" ){
                if (event.target.checked){
                total += (SandwichMaker.addCondiments(event.target.name)) * 100;
                } else {
                total -= (SandwichMaker.addCondiments(event.target.name)) * 100;
                }
            }
            
            printTotal(total);
        })    
    };
    
