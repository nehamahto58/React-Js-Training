//Initializing Array
let myFavoritePlaces = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];
console.log(myFavoritePlaces);
//ARRAY LENGTH
console.log("Size of array at first", myFavoritePlaces.length);
//ADD TWO NEW PLACES
var updatedPlaces = myFavoritePlaces.push("Janakpur", "Ilam");
console.log(myFavoritePlaces);
//ARRAY LENGTH
console.log("Size of array after adding two new items", myFavoritePlaces.length);

//REMOVE KATHMANDU
myFavoritePlaces.splice(3, 1);
console.log(myFavoritePlaces);



//ARRAY LENGTH
console.log("Size of array after removing Kathmandu", myFavoritePlaces.length);

