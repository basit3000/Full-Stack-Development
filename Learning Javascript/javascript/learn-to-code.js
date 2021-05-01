var name = "Basit Zaheer";
var age = 23;
var message = "Hi, my name is " + name + " and my age is " + age;
//alert(message);
console.log(message);

//Variables & Strings
var firstName = "Basit";
var lastName = "Zaheer";
var dateOfBirth = "3-3-98";
var profileURL = "https://www.github.com/basit3000";
var loginWlcmMsg = "Welcome, " + firstName + " " + lastName + ". Happy " + age + "rd birthday!";
console.log(loginWlcmMsg);

//numbers
var sum = 10 + 15;
var sub = 15 - 10;
var mul = 15 * 10;
var div = 15 / 10;
var mod = 15 % 10;
console.log("15 + 10 = " + sum + "\n" + "15 - 10 = " + sub + "\n" + "15 * 10 = " + mul + 
            "\n" + "15 / 10 = " + div + "\n" + "15 % 10 = " + mod);

//Logical Operators
var balance = 300;
var shoes = 755.65;            
var coupon = 500;
if(balance >= shoes){
    balance -= shoes;
    console.log("We just bought some great shoes! Balance remaining: " + balance);
}
else if(shoes - coupon <= balance){
    balance -= shoes - coupon;
    console.log("We just bought some great shoes with a coupon! Balance remaining: " + balance);
}
else{
    console.log("Need more money for the shoes!");
}

//logical operators
if((1==1 && 2==2) && "joe" === "joe"){
    console.log("These both are true!");
}
if(true && true){
    console.log("These are the same!");
}
if(1==3 || "joe" === "joe"){
    console.log("One of these is true.");
}
var cat1 = 1;
var cat2 = 5;
var cat3 = 3;
if(cat1 > cat2 && cat1 > cat3){
    console.log("Cat1 is the cutest");
}
else if(cat2 > cat1 && cat2 > cat3){
    console.log("Cat2 is the cutest");
}
else if(cat3 > cat1 && cat3 > cat2){
    console.log("Cat 3 is the cutest");
}
else{
    console.log("Something's wrong");
}

//arrays
var stu1 = "Bilal";
var stu2 = "Asad";
var stu3 = "Usama";
var stu4 = "Ahmed";
var students = ["Bilal","Asad","Usama","Ahmed"];
var futureTeachers = [];
futureTeachers.push(students[0]);
console.log(students);
console.log(futureTeachers);
var index = futureTeachers.indexOf("Bilal");
if(index>-1){
    futureTeachers.splice(index, 1);
}
console.log(futureTeachers);

//loops
var total = 10;
for(var i=0; i<total; i++){
    console.log(i);
}
for(var j=0; j<students.length; j++){
    console.log(students[j]);
}

//Functions
function area(length, width){
    return length*width;
}
var rectanglesArea = []
rectanglesArea.push(area(10,15));
rectanglesArea.push(area(16,2));
rectanglesArea.push(area(5,8));
console.log(rectanglesArea);

var bankBalance = 500;
function makeTransaction(priceOfSale){
    if (priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful!");
        console.log("Remaining balance: ", bankBalance);
    }
    else{
        console.log("Insufficient funds!");
        console.log("Remaining balance: ", bankBalance);
    }
}
makeTransaction(79);
makeTransaction(508.42);
makeTransaction(18.88);

var transaction = function(priceOfSale){
    if (priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful!");
        console.log("Remaining balance: ", bankBalance);
    }
    else{
        console.log("Insufficient funds!");
        console.log("Remaining balance: ", bankBalance);
    }
}
transaction(10);
transaction(50.99);
var printCustomerName = function(first,last){
    console.log("First name: ", first, " Last name: ", last)
}
var applyForCreditCard = function(creditScore, soul){

}

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);
bankOperations[transaction(10)];
bankOperations[printCustomerName("Ebad","Shahid")];

//objects is like a dictionary from python
var student0 = {
    firstName: "Basit",
    lastName: "Zaheer",
    age: 23
};
console.log(student0.firstName);
console.log(student0.lastName);
console.log(student0["firstName"]);

var student1 = new Object();
student1.firstName = "Abdullah";
student1.lastName = "Ahmed";
student1.age = 20;

var student2 = {};
student2.firstName = "Raza";
student2.lastName = "Razi";
student2.age = 27;

var student = [];
student.push(student0);
student.push(student1);
student.push(student2);

for(var index = 0; index < student.length; index++){
    console.log(student[index]);
}

//reusable objects
function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function(){
        return "Hi, I am " + this.firstName + " and I'm " + this.age + " years old.";
    }
}

var s1 = new Student("Shiraz", "Razi", 24);
console.log(s1.greeting());
var stud = [];
stud.push(new Student("Moiz", "Alam", 23));
stud.push(new Student("Ali", "Tanveer", 27));

for(var index = 0; index < stud.length; index++){
    var student = stud[index];
    console.log(student.greeting());
}

//for in loop
stude = stud[0];
for(var key in stude){
    console.log(stude[key]);
}

//bind
this.car = "Honda Civic";

var garage = {
    car: "Lambo",
    getCar: function() {
        return this.car;
    }
}

console.log(garage.getCar());
var storeCarForLater = garage.getCar;
console.log(storeCarForLater);