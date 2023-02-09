// let a = "one";
// let b = 6;

// console.log(a+b);
// console.log(typeof(a+b));

// const c = {
//     name:"harry",
//     section:1,
//     isPrincipal:false
// }

// c["friend"] = "sourav";
// c['name'] = 'darshan'

// console.log(c.section);

//for loop

// for(let i = 0; i<4 ;i++){
//     console.log(i);
// }

//for in loop

// let obj = {
//     sourav:98,
//     zanny:79,
//     manoj:89
// }

// for (let key in obj) {
//     console.log(`marks of ${key} is ${obj[key]}`);

// }

// while loop

// let n  = 10

// let i = 0;
// while(i<n){
//     console.log(i);
//     i++;
// }

// const marks = {
//     harry :98,
//     rohan:70,
//     akash:7,
//     monika:50
// }
// //Object.keys returns an array
// for(let i = 0; i<Object.keys(marks).length;i++){
//     console.log(`the marks of ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}`);
// }

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.indexOf("The"));

// const word = 'fox';

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// // Expected output: "The word "fox" is in the sentence"

// const a ="SOURAV";
// console.log(a.toLowerCase());

// const str = "Please give Rs 1000"
// console.log(str.slice("Please give Rs ".length));

// let a = [ 1, 2,3, 5,6];

// let r = delete[0];
// console.log(r);
// // let r = a.unshift(0);
// // console.log(a, r);

// let a = [ 1, 2,3, 5,6];
// let b = [7,8,9];

// let c = a.concat(b);
// console.log(c);

// let a =[7,19,1,11];
// a.sort();
// console.log(a);

//for each loop

// let num = [1,2,3,4,5];

// num.forEach((element) => {
//     console.log(element*element);
// });

// let num = [1,2,3,4,5];
//for of ---values
// for(let key of num){
//     console.log(key);
// }
//for in ---key

// for(let i in num){
//     console.log(i);
// }

// let num = [1,23,45,67,2,7,4,76]

// let a =  num.filter((val)=>{
//     return val <5
// })
// console.log(a);
// console.log(num);

// let num =[1,2,3,4];
// let b = num.reduce((h1,h2)=>{
//     // console.log(v);
//     return h1+h2
// })
// console.log(b);

// let arr =[1,2,3,4];

// let a = prompt("enter");
// a = Number.parseInt(a);
// arr.push(a)
// console.log(arr);

// let arr = [10,34,59,50,60];
// let a = arr.filter(val =>{
//     return val%10 == 0
// })
// console.log(a);

// const obj = {
//     a:1,
//     e:17,
//     d:51,
//     c:3,
// }
// console.table(obj)

// alert("enter here!")
// let a = prompt("whats your age?","age");
// let write = confirm("do you want it inside the page?");
// if(write){
//     document.write(a)
// }else{
//     document.write("Please allow!!")
// }

// let runAgain = true;
// const canDrive = (age) => {
//     return age > 18 ? true : false;
//   }

// while (runAgain) {
//     let age = prompt("What is your age?");
//     age = Number.parseInt(age);
//     if(age<0){
//         console.error("Please enter valid age !");
//         break;
//     }

//   if (canDrive(age)) {
//     alert("Yes you can drive !");
//   } else {
//     alert("You cannot drive");
//   }
//   runAgain = confirm("Do you want to run again??");
// }

// let a = setTimeout(function(){
//     alert("Im inside setTimeOut")
// },5000)

// var b = prompt("do you want to stop setTimeout?");
// if("n" == b){
//     clearTimeout(a)
// }
// console.log(a);

// const sum = (a,b)=>{
//     console.log(`yes ${a+b}`);
// }
// let a = setInterval(sum,1000,2,3)

// let promise = new Promise(function(resolve,reject){
//     console.log("Hi im Promise");
//     resolve(22)
// });
// console.log(promise);
// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Hi im promise1");
//     },4000)
// });
// let promise2 = new Promise(function(resolve,reject){
//     console.log("Hi im promise2");
// });
// let promise3 = new Promise(function(resolve,reject){
//     console.log("Hi im promise3");
// });
// console.log("Hi Iam A");

// setTimeout(function(){
//     console.log("Hi Iam B");
// },3000);

// console.log("Hi Iam C");

// console.log("promise is in pending ");
// let p1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // console.log("Hi im promise resolved");
//         resolve(true)
//     },3000)

// });

// console.log("promise is in pending ");
// let p2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // console.log("Hi im promise rejected");
//         reject(new Error("Im a error"))
//     },3000)

// });

// p1.then((value)=>{
//     console.log("value---",value);
// });

// p2.catch((err)=>{
//     console.log(err);
// })

//promise chaining
// console.log("Promise pending");
// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("resolve after 2 sec");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2");

//         },3000)
//     })

// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 3");
//         },2000)
//     })
// }).then((value)=>{
//     console.log(value);
//     console.log("Done done");
//     return 2
// }).then((value)=>{
//     console.log(value);
// })

//attaching multiple handlers

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1);
//     },3000)
// })
// p1.then(()=>{
//     console.log("harry");
// })
// p1.then(()=>{
//     console.log("congratualations this promise is resolved");
// })

//promise apis

//------------------------------------
//PROMISE ALL
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 1");
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 2");
//   }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 3");
//   }, 3000);
// });

// let promiseAll = Promise.all([p1,p2,p3]);
// promiseAll.then((val)=>{
//    console.log(val);
// })

//------------------------------------

//PROMISE.ALLSETLLED
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 1000);
//   });
  
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("error"));
//     }, 2000);
//   });
  
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 3");
//     }, 3000);
//   });

// let promised = Promise.allSettled([p1,p2,p3]);
// promised.then((val)=>{
//     console.log(val);
// })

// //------------------------------------

// //PROMISE.RACE()
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 5000);
//   });
  
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("value 2");
//     }, 2000);
//   });
  
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 3");
//     }, 3000);
//   });

// let promised = Promise.race([p1,p2,p3])
// promised.then((val)=>{
//     console.log(val);
// })


//------------------------------------
 
//PROMISE.any()
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 5000);
//   });
  
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("value 2");
//     }, 2000);
//   });
  
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 3");
//     }, 3000);
//   });

// let promised = Promise.any([p1,p2,p3])
// promised.then((val)=>{
//     console.log(val);
// })

// //------------------------------------

// //PROMISE.RESOLVE()
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 1000);
//   });
  
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("value 2");
//     }, 2000);
//   });
  
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 3");
//     }, 3000);
//   });

// let promised = Promise.resolve(8)
// promised.then((val)=>{
//     console.log(val);
// })


//------------------------------------

//PROMISE.REJECT()
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("value 1");
//     }, 1000);
//   });
  
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("value 2");
//     }, 2000);
//   });
  
//   let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("value 3");
//     }, 3000);
//   });

// let promised = Promise.reject(new Error("qwerty"))
// promised.then((val)=>{
//     console.log(val);
// })

//----------------------------------------

//ASYNC & AWAIT


// async function weather(){

//     let delhi = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("32 degrees")
//         },5000)
//     })

//     let bangalore = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("22 degress")
//         },2000)
//     })

//     // delhi.then((val)=>{
//     //     console.log(val);
//     // })
//     // bangalore.then((val)=>{
//     //     console.log(val);
//     // })

//     let delhiW = await delhi;
//     let bangaloreW = await bangalore;
//     console.log(delhiW,bangaloreW);

// }

// console.log("welcome to weather forecasting!");
// let a = weather()
// console.log(a);

//------------------
//error object 

// try{
//    throw
// }catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }


//----------------------------

//FETCH API 

