// let selects = document.querySelectorAll('.img-items');
// let cpuSelects = document.querySelectorAll(".img-cpu-choosed");

// for (let i = 0; i <= selects.length - 1; i++) {
//     selects[i].addEventListener('click', () => {
//         hiddenCpuSelectors();
//         for (let j = 0; j <= selects.length - 1; j++) {
//             if (j != i) {
//                 selects[j].classList.add("hidden");
//             }
//         }
//         let choosed = '';
//         if (i == 0) {
//             choosed = 'Paper';
//         } else if (i == 1) {
//             choosed = 'Rock';
//         } else {
//             choosed = 'Scissors';
//         }
//         document.querySelector('.items_box > h1').innerHTML = `You choosed ${choosed}`
//         let randChoosed = Number(Math.floor((Math.random() * 10) / 4));
//         cpuSelects[randChoosed].classList.remove('hidden');
//         gameLogic(i, randChoosed)
//     });
// }

// document.querySelector('button').addEventListener('click', refresh);

// function refresh() {
//     for (let i = 0; i <= selects.length - 1; i++) {
//         cpuSelects[i].classList.add('hidden');
//         selects[i].classList.remove('hidden');
//     }
//     document.querySelector('.items_box > h1').innerHTML = "Choose your weapon";
// }


// function hiddenCpuSelectors() {
//     for (let i = 0; i <= selects.length - 1; i++) {
//         cpuSelects[i].classList.add('hidden');
//     }
// }

// function gameLogic(userSelect, cpuSelect) {

//     if (userSelect !== cpuSelect) {
//         if (userSelect == 0) {
//             if (cpuSelect == 1) {
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             } else {
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//         if (userSelect == 1) {
//             if (cpuSelect == 2) {
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             } else {
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//         if (userSelect == 2) {
//             if (cpuSelect == 0) {
//                 document.querySelector('#user-point').innerHTML = Number(document.querySelector('#user-point').innerHTML) + 1;
//             } else {
//                 document.querySelector('#cpu-point').innerHTML = Number(document.querySelector('#cpu-point').innerHTML) + 1;
//             }
//         }
//     }
// }

// document.addEventListener('keydown', (e) => {
//     if (e.key = 'R') {
//         refresh();
//     }
// })








// ranNumber = Math.floor(Math.random() * 20)
// console.log(ranNumber)

// document.querySelector("#buttonArea").addEventListener("click", function cli() {
//         let Input = document.querySelector("#userGuess").value;
//         let show_size_Num = document.querySelector(".test");






//         if (Input && Input >= 1) {
//             if (Input > ranNumber) {
//                 document.querySelector("#game").style.backgroundColor = "blue"
//                 document.querySelector("body").style.backgroundColor = "blue"
//                 show_size_Num.innerHTML = "your Big "
//             } else if (Input < ranNumber) {
//                 console.log("Number")
//                 document.querySelector("body").style.backgroundColor = "red  "
//                 document.querySelector("#game").style.backgroundColor = "red  "
//                 show_size_Num.innerHTML = "your Small"


//             } else {
//                 show_size_Num.innerHTML = "ok find true number "
//                 document.querySelector("body").style.backgroundColor = "green"
//                 document.querySelector("#game").style.backgroundColor = "green  "
//                 document.querySelector("#userGuess").style.backgroundColor = "green  "
//                 document.querySelector("#buttonArea").style.backgroundColor = "green  "

//             }


//         }


//     }


// )

// console.log(this)

// const User = {
//     name: "ali",
//     Family: "mohamadi",
//     job: "Camputer",
//     test: function() {
//         console.log(this)
//     }
// }
// User.test()
// Name = "ali";
// Family = "bamdad"

// Object_Me = {
//     Name: "yoones",
//     Family: "Chakery",
//     Job: "mobile",
//     Func: function() {
//         console.log(this.Job)
//     }
// }
// console.log(Object_Me.Func())
// Name = "AudioLi ";

// user = 12;
// user_Copy = user;
// User = {
//     name: "ali",
//     family: "hamidi",
//     func: function() {

//         test = () => {
//             console.log(this)
//         }
//         test()


//     }
// }
// User.func()
// obj = {
//     name: "ali",
//     userName: "ali123",
//     password: "ali123",
//     f_Obj: function() {
//         console.log(this)
//     }

// }
// let num = 54;
// numCopy = num;
// num = 123;
// console.log(numCopy)
// console.log(num)


// obj = {
//     name: "ali",
//     family: "saeedi ",
//     f: () => {
//         console.log(this)
//     }
// }



// console.log(obj.f())
// const o = {
//     name: "yoones",
//     email: "yoones69@gmail.com",
//     func: function() {
//         console.log(this.email)
//     }
// }
// const a = {
//     funct: function(city) {
//         console.log(`helow ${this.name} and email is ${this.email} and city :${city} `)
//     }
// }
// a.funct.call(o, "mashhad")
// let array = [1, 54, 65, 76, [1, 2]];
// [n1, n2, n3, n4, [n5, n6]] = array;
// console.log(n1, n2, n3, n4, n5, n6);
// a = [1, 2];
// let new_Set = new Set([1, 2, 3, 3, 4]);
// let new_Set2 = new Set([4, 7, 8, 9]);


// function total(set1, set2) {
//     for (let value of set2) {
//         let newSEt = new Set();
//         set1.add(value)
//         newSEt = set1;

//         return newSEt;
//     }
// }
// console.log(total(new_Set, new_Set2));
// let linkall = document.querySelectorAll("a");
// for (let link of linkall) {
//     let href = link.getAttribute("href");
//     link.setAttribute("href", href.replace("http://", "https://"))

// };
// let input = document.querySelector("#userGuess");
// input.setAttribute("title", "enter number beetwin 1 to 10");
// input.setAttribute("style", "color:white;background-color:#777");
// let linkAll = document.querySelectorAll("a");
// for (let link of linkAll) {
//     let href = link.getAttribute("href");

//     link.setAttribute("href", href.replace("http://", "https://"));




// }
// let body = document.querySelector("body");
// let divGame = document.querySelector("div");
// divGame.style = "background-color: #333";

// body.style.backgroundColor = "#333";
// let h2 = document.querySelector(".test");
// h2.style.backgroundColor = "red"
// console.log(h2.getAttribute("class"))
//map //
// const myMap = new Map();
// user = { name: 12 };
// myMap.set("id", 23);
// myMap.set(user, "red");
// for (let items of myMap.values()) {
//     console.log(items)
// }
// let myLink = document.querySelector("a");
// myLink.setAttribute("data-name", "alizade");
// console.log(myLink.dataset.name)

// const arr = [1, 2, 3]
// let map = new Map()
// map.set(arr, "yoones");
// map.set("number", 1232)
// console.log(map.has(arr));
// function namee() {
//     return function ret() {
//         console.log("test function ret")
//     }
// };
// namee()()
// name = "saeed", family = "alizade"
// const obj = {
//     name: "ali",
//     getname: function() {
//         return this.name;
//     }
// }
// let ob = obj.getname;
// console.log(ob.bind(obj)())


// let ranNumber = Math.floor(Math.random() * 11);
// console.log(ranNumber)
// document.querySelector("button").addEventListener("click", () => {
//     inputUser = document.querySelector("input").value;
//     showText = document.querySelector("h2");
//     let body = document.querySelector("body");
//     if (inputUser && inputUser > 0) {
//         if (inputUser > ranNumber) {
//             showText.textContent = "to upper number"
//             body.style.backgroundColor = "red";
//         } else if (inputUser < ranNumber) {
//             showText.textContent = "to lower number";
//             body.style.backgroundColor = "red";
//         } else {
//             showText.textContent = "ok number"
//             showText.style = "color:green";
//             body.style.backgroundColor = "green";

//         }
//     }
// });


// links = document.querySelectorAll("a");
// for (link of links) {
//     console.log(link)
// }
// let h1 = document.querySelector("h1");

// h22 = document.querySelector("h2");



// function welcome(name) {
//     return function helow() {
//         console.log(`welcome ${name}`)
//     }
// }
// let resualt = welcome("saeed    ");
// resualt()
// const obj = {
//     name: "ali",
//     getName: function(n) {
//         return this.name + n;

//     }
// }
// bindmethod
// let result = obj.getName;
// lastResulat = result.bind(obj, "reza")();
// console.log(lastResulat);
// const user = {
//     id: 12,
//     getid: function(name) {
//         return `helow ${name} to id : ${this.id}`

//     }
// }
// let resualt = user.getid;
// last_Resualt = resualt.bind(user, "ali");
// console.log(last_Resualt())




// function getid() {
//     console.log("get id test1 ")
// }

// let id = 122;
// (function() {
//     function getid(id) {

//         console.log("get id test 2 for id " + id)
//     }
//     getid(id)
// })(id)
// getid()
// let counter = 0;


// function add() {
//     let counter = 0;

//     function plus() {
//         counter += 2;

//     }
//     plus()
//     plus()
//     plus()
//     plus()
//     plus()
//     return counter;







// }

// console.log(add())
// let add = (function() {
//     let counter = 0;
//     return function() {
//         counter += 1;
//         return counter;
//     }
// })()

// add()
// add()
// add()
// add()
// add()
// add()
// console.log(add());

// function add2() {
//     let count = 0;

//     function retCount() {
//         count += 1
//     }
//     retCount()
//     retCount()
//     retCount()
//     return count;


// }

// let iife = (function() {





//     let Count = 0;
//     return function() {
//         Count += 1;
//         return Count
//     }

// })()
// iife()
// iife()
// iife()
// iife()
// alert(iife()


//



// let date = new Date("2020 7 10 20:32:36");
// console.log(date)
// const iife = (function() {
//     counter = 1;
//     return function() {
//         counter += 1;
//         return counter
//     }


// })()
// iife()
// iife()
// iife()
// iife()
// console.log(iife())


// function add() {
//     let counter = 0;

//     function add2() {
//         counter += 1;
//     }
//     add2()
//     add2()
//     add2()
//     return counter;
// }

// console.log(add())


// const pluss = (function() {
//     let count = 0;
//     return function() {
//         count += 1;
//         return count;
//     }


// })()
// pluss()
// pluss()
// pluss()
// pluss()
// console.log(pluss)
// document.querySelector("#buttonArea").addEventListener("click", () => {
//     let input = document.querySelector("#userGuess").value;
//     let showStatus = document.querySelector(".test");
//     showStatus.innerHTML = "clicked"
//     if (input && input > 0) {
//         alert("ok true")
//     }

// })
// let ranCpu = Math.floor(Math.random() * 11)
// console.log(ranCpu)
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     let input = document.querySelector("#input1").value;
//     let showStatus = document.querySelector("h2");
//     if (input && input > 0) {
//         if (input > ranCpu) {
//             showStatus.innerHTML = "to long"
//         } else if (input < ranCpu) {
//             showStatus.innerHTML = "to small"
//         } else {
//             let body = document.querySelector("body");
//             let divGame = document.querySelector("#game");
//             showStatus.innerHTML = "ok find number true ";
//             showStatus.style.backgroundColor = "green";
//             showStatus.style.color = "#ddd";
//             body.style.backgroundColor = "green";
//             divGame.style.backgroundColor = "green"
//         }
//     }
// })
// let math = Math;
// let arr = [1, 87, 56];
// console.log(math.)
// const json = {
//     "users": [{
//         name: "ali",
//         email: "saeedi@gmail.com",
//     }, { name: "reza", email: "hasani@gmail.com" }, { name: "mohamd", email: "reza@gamil.com" }]
// }
// let resulat = JSON.stringify(

//     { name: "ali", test: false }
// )
// console.log(JSON.parse(resulat).test)
// let test = JSON.stringify(

//     { name: "ali", id: "435", test: false }
// )
// console.log(test)


// let resualt = JSON.parse(test).id;
// console.log(resualt)
// let array = [1, 265, 72, 76];
// resualt = array.filter(even)
// console.log(resualt)

// function even(num) {
//     return num % 2 != 0;
// }
// "use strict";
// console.log(eval("2*3"))
// let eval = 122;
// console.log(eval)
// let array = [54, 2, 3, 67];
// let reducer = (acculomate, currentValue, index, array) => {

//     console.log(index)

//     return acculomate + currentValue;

// };
// let resualt = array.reduce(reducer);
// console.log(resualt)

// let array = [1, 22, 3];
// let resualt = array.reduce((num1, num2, index) => num1 + num2 + index)
// console.log(resualt);
// class Car {
//     constructor(name, age, cache) {
//         this.name = name;
//         this.age = age;
//         this.cache = cache
//     }
//     getNameCar() {
//         return this.name;

//     }
//     getAge() {
//         return this.age;
//     }

// }
// let car1 = new Car("bmw-528", 2017, true);
// let car2 = new Car("benz-c200", 2012, false);
// console.log(car2.cache)
// class Persion {
//     constructor(name, age, last) {
//         this.name = name;
//         this.age = age;
//         this.last = last;



//     }
//     retName() {
//         return `welccome your name  ${this.name}`;

//     }
// }

// Persion.prototype.printyears = function() {
//     let date = new Date();
//     year = date.getFullYear();
//     let dateUser = year - this.age;
//     return dateUser;
// };
// const persion = new Persion("yoones", 21, "female");
// console.log(persion.printyears())
// class Persion {
//     constructor(name, id, phone, nameFather) {
//         this.name = name;
//         this.nameFather = nameFather;
//         this.id = id;
//         this.phone = phone;
//     }
//     printName() {
//         return this.name;
//     }


// }

// let persion1 = new Persion("ramin", 43, "0913547662", "saeed")
// class Student extends Persion {

//     constructor(name, id, phone, nameFather, city) {
//         super(name, id, phone, nameFather);
//         this.city = city;
//     }
//     get City() {
//         return `ok from ${this.city}`;
//     }
//     set() {

//     }

// }
// let student1 = new Student("hasan", 32, "0912854932", "Ali", "mashhad");
// console.log(student1.City);
// class User {
//     constructor(username, email, password) {
//         this._username = username;
//         this._email = email;
//         this._password = password;


//     }
//     test() {
//         console.log("ok test ")
//     }
//     get username() {
//         return this._username;
//     }


//     set email(male) {
//         this._email = male;
//     }

// }


// let user1 = new User("Ali32", "ali34@gmail.com", "yoones123")

// console.log(user1._email)
// console.log("test function ");
// console.log("test function ")
// user2 = new User("ali", "mohamdi@gmail.com", "ali123")
// console.log("test ")
// class Mobile {
//     constructor(name, age, color, ) {
//         this._name = name;
//         this._age = age;
//         this._color = color
//     }
//     get color() {
//         return this._color;
//     }
//     get name() {
//         return this._name;
//     }
//     get age() {
//         return this._age;
//     }
//     set name(nameMobile) {
//         this._name = nameMobile;
//     }
//     set color(colorMobile) {
//         this._color = colorMobile;
//     }
//     set age(ageMobile) {
//         this._age = ageMobile;
//     }
// }
// let Mobile1 = new Mobile("samsung j6 ", 2018, "green");
// Mobile1.name = "iphone 6s";
// Mobile1.age = 2016;
// Mobile1.color = "white";
// console.log(Mobile1.name)
// console.log(Mobile1.age)
// console.log(Mobile1.color)
// class Persion {
//     constructor(name) {
//         this.name = name;

//     }
//     static heloo(p) {
//         console.log(`heloo ${p.name}`)
//     }



// }


// let persion1 = new Persion("saeed");
// Persion.heloo(persion1);
// class mobile {
//     constructor(name, model, age) {
//         this._name = name;
//         this._age = age;
//         this._model = model;

//     }
//     get name() {
//         return this._name;
//     }
//     set age(replaceAge) {
//         this._age = replaceAge;
//     }
// }
// class laptop extends mobile {
//     constructor(name, model, age, color) {
//         super(name, model, age);
//         this._color = color;
//     }
//     get color() {
//         return this._color;
//     }
//     set color(replaceColor) {
//         this._color = replaceColor;
//     }
// }
// let phone = new mobile('iphone 6s', 2016, 2021);
// console.log(phone.name)

// let lap = new laptop("ideopad320", 2020, 2020, "white");
// lap.color = "red";
// console.log(lap._color)
// class player {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }
//     get agee() {
//         return this.age;
//     }
//     static welcome(instance) {
//         return `welcome ${instance.name}`
//     }
// }
// let player1 = new player("Ali", 20);
// let resulat = player.welcome(player1);
// console.log(resulat);
// class Player {
//     constructor(name) {
//         this.name = name;
//     }
//     static heloo(instance) {

//         console.log(instance.name)
//     }
// }
// Player.prototype.age = 32;

// let player1 = new Player("saeed");
// console.log(player1.age);
// function sum(num1, num2, callbacke) {
//     let resualt = num1 + num2;
//     callbacke(resualt)
// }

// function printSum(number) {
//     console.log(`this number is ${number}`)
// }


// sum(3, 4, printSum)
// function name() {
//     console.log("test function runing")

// }
// setInterval(() => {
//             let date = new Date();
//             let h = date.getHours();
//             let m = date.getMinutes();
//             let s = date.getSeconds();
//             let clocked = document.querySelector("#clock");
//             clocked.innerHTML = h + ":" + m + ":" + s;


//         },
//         1000)
// let myPromis = new Promise(function(resulve, reject) {
//     resulve();
//     reject();



// });
// myPromis.then(
//     function(value) {

//     },
//     function(ERROR) {

//     }
// )
// setTimeout(() => {
//     myfunction("test")
// }, 3000)


// function myfunction(value) {
//     console.log(value)
// }
// let myPaomise = new Promise((resulve, reject) => {
//     setTimeout(function() {
//         resulve("test promise")

//     }, 3000)
// })

// myPaomise.then((value) => {
//     console.log(value)
// }, () => {
//     console.log("error")
// }) 
// let promise = new Promise((resulve, reject) => {
//     setTimeout(() => {
//         resulve("test ok");
//     }, 3000)
// });
// promise.then(
//     function(value) {
//         console.log(value)
//     }, () => [
//         console.log("error")
//     ]
// )

// let promise = new Promise((resualve, reject) => {
//     setTimeout(() => {
//         resualve("test ok next 3 secends")
//         reject()
//     }, 3000);
// })
// promise.then(function(value) {
//     console.log(value)
// }, () => {
//     console.log("error")
// })
// let promise = new Promise((resolve, reject) => {
//     resolve("test ok", "value2");

// })
// promise.then(
//     (value, value2) => {
//         console.log(value)


//     },
//     function() {
//         console.log("erorr  ")
//     }
// ) 
// async function user() {
//     return "test"
// };
// user().then(
//     function(value) {
//         console.log(value)
//     },
//     function() {
//         console.log("error")
//     }

// )
// async function show() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(function() {
//             resolve("test ok")
//         }, 4000)

//     })
//     console.log(await promise)
// }
// function resolvetree() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("test ok resolved");
//         }, 3000)

//     })
// }
// async function showAsync() {
//     console.log("calll")

//     let resualt = await resolvetree();
//     console.log(resualt)

// };
// showAsync();
// function show_resolve() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("show resolve ok");
//         }, 3000)

//     })

// }
// async function show_Acync() {
//     console.log("calll")
//     let resulat = await show_resolve();
//     console.log(resulat)
// }
// show_Acync();
// function show() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("test ok after 3 seceds");
//         }, 3000);
//     })
// }


// async function call() {
//     console.log("test call promise ");
//     let resulat = await show();
//     console.log(resulat)
// }
// call()



console.log("test ")