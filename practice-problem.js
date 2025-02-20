// You are throwing a party and have a list of attendees.
var myList = ["Sara", "John", "Mary", "Marie", "Joe"];
// Someone new arrives—update your list.
myList.push(["Larry"]);
console.log(myList);
// Unfortunately, the last person on your list had to cancel—adjust your list accordingly.
myList.pop("Joe");
console.log(myList);
// Finally, check who is still attending and print the updated list.
console.log(myList);
