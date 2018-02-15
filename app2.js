//PROBLEM: How to manipulate the object in this file?
//SOLUTION: Create a separate function for each: GET, POST, PUT, DELETE

//GET, retrieve values from the object
function getValue(property){
  value = car[property];
  console.log("The value you asked is " + value);
};

//POST, add a row in the object
function addNewProperty(property, value){
  car[property] = value;
};

//PUT, edit the kilometres value in the objext
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

//getValue("type");
//addNewProperty("passengers",5)
//editKilometres(17500);
//deleteRow("year");

console.log(car);

