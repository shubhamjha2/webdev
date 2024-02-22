




// import * as bundle from "./demo.js";
// import double from "./demo1.js";









//----------------------------------------------------------------------------------------------------------------------------------
//
// const shubham="hello";
// h="harami";
// console.log(shubham);









// ----------------------normal function----------------------
// add(10 ,34);
// function add(num,num1){
//     console.log("answer is");
//  console.log(num+num1);
// }











// ----------------------arrow_function----------------------

// let double =(num )=>{
//     console.log(num*2);
// }
// double(50);









// ---------------------import and export------------------

// bundle.venom;
// bundle.person();
// double(55);















// ---------------------class and object-------------------


// // class1
// class student {
//   constructor(xxx) {
//     this.namee = xxx;
//   }
//  age = 20;
//   details=()=> {
//     this.phone_no = 93509;
//     this.address = "d-609 west vinod nagar";
//     console.log(this.phone_no);
//   }
// }

// inheritance
// calss2
// class school extends student {
//   school_name() {
//     this.school_name22 ="avb public school";
//     console.log(this.school_name22);
//   }
// }
// //<-------------object


// let object1 = new school("shubham"); 
// console.log(object1); //   ^---  construcor parameter
// object1.school_name();
// object1.details();
// console.log(object1.age);
// console.log(object1.address);
// console.log(object1.school_name22);
// console.log(object1.address);


// //<------object end








// ---------------spread_and_rest_operators(...)----------

// let list =["shubham","himanshu","pawan"];
// let newlist=[...list,"ruchi","kashish","sakshi","neha"];
// console.log(list);     //spreaad    
// console.log(newlist);

// let student={
//     sname:"shubham",
//     lastname:"jha",
//     age:20
// }
// let defaulters={
//     ...list,...newlist,...student,girl:"sneha",girl1:"simran"
// }                            //spreaad 

// console.log(student)
// console.log(defaulters)

// // ---------------rest
// // rest and spread both are same when we use (...)in array and  objet it is known as spread but when we use(...) in functions then it is called as rest

// function number(...all){
// console.log(all);
// }
// number(1,2,3,4,5,6,67,7,8,4,4,47,5,4,57,4,4,57,47);







// // -----------------------------arry destructuring-----------------------------------------

// let list=["audi","nano","g-wagon"];
// let[car1,car2,car3]=list;
// console.log(car3);

// // ----------------------------------object destructuring--------------------------------------
// let person ={
//     age:34, 
//     naame:"shubham jha",
//     trade:10
// }
// let {naame,age,trade} = person;
// console.log(age);







//-------------------------------------------------map and filter -------------------------------------------------
//map with arrow function
// let array3=[2,3,4,5,6,7,8,9,10];
// let array6 = array3.map(x=> x*2);
// console.log(array6);

// //map with normal function
// let array1=[2,3,4,5,6,7,8,9,10];
// let arry2 = array1.map(function(x){
//     return x*2;
// });
// console.log(arry2);


//filter




//-------------------------------------------------date  and time -------------------------------------------------

// ctrl+sapce   to open list of parameters in a function
// let mydate= new Date();
// console.log(mydate.toLocaleDateString('default',{weekday :"short"}));
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toISOString());
// console.log(mydate.toUTCString());
// console.log(mydate.getTimezoneOffset());
// console.log(mydate.toJSON());



//-------------------------------------------------Arrays-------------------------------------------------
// let arr=[1,3,4,5,5,6,7,78,4,34,32,4,56,3];
// console.log(arr);
// console.log(typeof(arr.join()));
// console.log(typeof(arr));
//slice
// console.log(arr.slice(2,6));
// console.log(...arr);
// //splice
// console.log(arr.splice(2,6));
// console.log(...arr);




// const person = {
//     firstName: "John",
//     lastName: "Doe"
//   };
  
//   alert(
//   person.firstName
//   );
