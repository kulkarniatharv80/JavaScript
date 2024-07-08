
// const Product ={

//     Name:"Parker Jotter Standard CT Ball Pen",
//     color:"Black", //Key:value (with object datatype )
//     Rating:4,
//     price:270,
//     MRP:285,
//     Discount:5%
// };
// console.log(Product)


// console.log("Hello world");

//Comparison operators

// let a = 10;
// let b = 3;

//lets perform the equal to operators 

// let c =10;

// a == c;

// console.log(" a == c",a==c);


//Conditinal statements

// let age = 2;

// if(age >= 18){
//     console.log("You can able to vote for the BJP party ");
// }
// else{
//     console.log("You cannot vote for the this election");
// }

// let a =99;

// if(a % 2 == 0){
//     console.log("Even");

// }
// else{
//     console.log("odd");

// }

// //Ternary operators
// let age =80;

// let Result = age >18 ?"You can vote":"Cannot for vote";

// console.log(Result);

//Question 

// let a = prompt("Enter the number:");
// if(a % 5 == 0){
//     console.log("Yes! multiple of 5");
// }

//Lecture :3 ///Loops in Java Script /////

// let n = prompt("Enter number :");

// for(let i =1;i<=n;i++)
//     {
//         console.log("Final Year Placement");
//     }


//print all the even numbers from  1 to 100

// for(let i =1;i<=100;i++){

//     if(i % 2 ==0){
//         console.log(i);
//     }
// }


// let gameNumber =15;
// let number = prompt("Enter your guess number ");
// console.log(number);

// for(let i =1;i<=gameNumber;i++){
//     if(number == gameNumber){
//         console.log("YOu are correctly predict the number");
//     }
// }

//Stings in js 

// let str = "Apana college";
// console.log(str);

// //str.length() function
// console.log("The length of the string:",str.length);

// //str.UpperCase()
// console.log("The string in the uppercase :",str.toUpperCase());

// //str.lowerCase()
// console.log("The string in lowercase :",str.toLowerCase());

// //str.trim()
// let str1 = "                   Apana          college                           ";
// console.log("The removes the white Spaces :",str1.trim());

// //Slice function 
// let str2 = "Ataharavkulkarni";
// console.log("The slice fuction:",str2.slice(1,5))


// //concat() function
// console.log(str.concat(str2))


//Question 

// let str = prompt("Enter the Username :");

// console.log("@",str,"123");



//Lecture :4 Array ////////////

// let marks= [60,66,47,99,11,77,56,45,89,100];
// console.log(marks);

// for(let i=0;i<marks.length;i++){
//     console.log("The values:",marks[i]);

// }


// let marks1 = [35,80,60,41,60,99]
// console.log(marks1)


//push()opertion on stack

// let foodItem = ["Potato","chiili0","Tomato","Cucumber"];

// console.log(foodItem);

// foodItem.push("Methi","bajii");
// console.log(foodItem);



//Splice() method in array 
 // let arr = [1,2,3,4,5,6,7]

// console.log(arr);

// arr.splice(3,3,123,200);


let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(companies);


companies.shift();


console.log(companies);

let Result= companies.splice(2,1,"ola");
console.log(Result);
