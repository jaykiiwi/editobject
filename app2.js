//PROBLEM: How to manipulate the object in this file?
//SOLUTION: Create a separate function for each: GET, POST, PUT, DELETE

//GET, retrieve values from the object
function getValue(property){
  var value = car[property];
  console.log("The value you asked is " + value);
  return value;
};

//LIST, display all properties of the object
function listAllProperties(){
  console.log("=== Car Properties ===");
  for(var property in car){
    if(car.hasOwnProperty(property)){
      console.log(property + ": " + car[property]);
    }
  }
  console.log("=====================");
};

//POST, add a row in the object
function addNewProperty(property, value){
  car[property] = value;
};

//PUT, update any property value in the object
function updateProperty(property, value){
  if(car.hasOwnProperty(property)){
    car[property] = value;
    console.log("Updated " + property + " to " + value);
  } else {
    console.log("Property '" + property + "' does not exist. Use addNewProperty() to add it.");
  }
};

//PUT, edit the kilometres value in the object (specific use case)
function editKilometres(kilometres){
  car.kilometres = kilometres;
};

//DELETE, delete a row in the object
function deleteRow(property) {
  delete car[property];
}

// the object
var car = {
type: "Citroen",
model: "C3",
year: "2006",
kilometres: 15000,
color: "white",
price: 4999
};

//Example usage:
//getValue("type");
//listAllProperties();
//addNewProperty("passengers",5)
//updateProperty("price", 5500);
//editKilometres(17500);
//deleteRow("year");

console.log(car);

