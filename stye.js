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
// let RanNumber = Math.floor(Math.random() * 11);
// console.log(RanNumber);
// document.querySelector("#buttonArea").addEventListener("click", test)


// function test() {

//     let input_User = document.querySelector("#userGuess").value;
//     let test_Number = document.querySelector(".test");

//     if (input_User && input_User >= 1) {
//         if (input_User > RanNumber) {
//             test_Number.innerHTML = "to big Numbering "
//             test_Number.style.backgroundColor = "red", test_Number.style.color = "white"
//         } else if (input_User < RanNumber) {
//             test_Number.innerHTML = "to small Numbering";
//             test_Number.style.backgroundColor = "red", test_Number.style.color = "white"

//         } else {
//             test_Number.innerHTML = "pefect find true number"
//             document.querySelector("body").style.backgroundColor = "green";
//             test_Number.style.backgroundColor = "green"





//         }
//     }
// }
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