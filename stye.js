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



let date = new Date("2020 7 10 20:32:36");
console.log(date)