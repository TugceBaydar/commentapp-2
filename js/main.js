// $(document).ready(function() {

//       $(".button").click(function() {
//             $("ol").append("<li>tugce</li>");
//       });


// })
   // console.log("hi")
// document.write("tugcee");
// alert("helloo")

// var name = prompt("whats your name?")
// console.log(name)

// var numberValue = 12
// var numberValue2 =Number(prompt("choose a number between 1 - 50"))
// var boolValue = true
// var three = "type something"
// var four = [33, false, "string"]

// // var combineVariables = numberValue + numberValue2
// // console.log(combineVariables)

// if(numberValue2 > 135) {
// 	alert("yeah you are right")
// }

// else {
// 	alert("nope!")
// }

// var num1 = 6
// var num2 = 6

// if(num1===num2) {
// 	console.log("they are equal")
// }


// var username = prompt("whats your name")
// while (username != "muttalip") {
// 	username = prompt("tell me the truth!")
// }


// for(var i = 0; i < 20 ; i++) {
// 	document.write(i)
// }



// var num1 = 30
// var num2 = 50

// function add() {
// 	document.write(num1 + num2)
// }

// add()

// ----------- week 8 --------------

// ------------- Video 1

// console.log("hello")
// alert("heyy dude!")

// -------------

// var num = Number(prompt("tell me a number"))
// console.log(num)

// -------------

// var me = "amazing"
//
// var you = 26
//
// var a = true
//
// var b =[true, 27 , "great"]
//
// var e = "I am"

// -------------

// var c = me + you + a
// document.write(c)

// -------------

// var d = Number(prompt("how old are you"))
//
// if ( d > 21) {
//   alert("you are good to go!!")
// }
//
// else {
//   alert("stay at home dude")
// }

// -------------

// for(var i=1; i<=20; i++)
// document.write(i)

// -------------

// function myFunction(x, y) {
//      document.write(x + " " + y)
// }
//
// myFunction(e, me)

// ------------- Video 2

// var x = prompt("whats your name")
// // alert("Hello " + x + "!")
// document.write("Hello " + x + "!")

// ------------- Video 3

// var username = prompt("whats your name")
// if (username == "Alice" || username == "Bob") {
//   document.write("Hello " + username + "!")
// }
//
// else {
//   document.write("I dont like you !")
// }

// ------------- Video 4
// var content = "Hey you!"
// document.getElementById('message').innerHTML = content

// ------------- Video 5

// function getInfo() {
//   var username = document.getElementById('username').value
//   var password= document.getElementById('password').value
//   console.log("your username is" + username + "and your password is" + password)
// }

// ------------- Video 6

// var drinks = ["wine" , "beer" , "votka" , "RAKI:)"]
//
// for(i=0; i<drinks.length; i++) {
//     if ( drinks[i] == "RAKI:)" ) {
//       console.log("you know what you are doing with this " + drinks[i])
//     }
//     else if (drinks[i] = "beer" ){
//       console.log("i like this " + drinks[i])
//     }
// }

// ------------- Video 7

// var arr = [10 , 55 , 22 , 87 , 14]
// var biggest = 0
// for(i=0; i<arr.length; i++) {
//   if(biggest < arr[i]) {
//        biggest = arr[i]
//   }
// }
//
// console.log(biggest)


// ------------- Video 10

// var objPeople = [
//   {
//     username: "tugce",
//     password: "123"
//   },
//   {
//     username: "muto",
//     password: "456"
//   },
//   {
//     username: "alex",
//     password: "789"
//   }
// ]
//
// function getInfo() {
//    var username = document.getElementById('username').value
//    var password = document.getElementById('password').value
//    var isSuccess = false
//
//    for (i=0; i < objPeople.length; i++) {
//      if ( username == objPeople[i].username && password == objPeople[i].password) {
//         console.log(username + " is logged in!")
//         isSuccess= true
//         break
//      }
//      else {
//        isSuccess = false
//        console.log("incorrect username or password")
//      }
//
//    }
//       if (isSuccess) {
//         alert("you are logged in")
//       }
//       else {
//         alert("wrong password!")
//       }
// }

// --------------------------- week 9 ----------------
// ----- exs. 1
// for(var i = 0; i<=100; i=i+5) {
//   console.log(i)
// }
// ------- exs. 2
// var username = getElementById('username').value

// ----- exs 3
//
// var myObject = [
//   {
//     name:a,
//
//   },
//   {
//
//   },
//   {
//
//   },
//   {
//
//   }
// ]
//
// ------video 2------
//
// var newDiv = document.createElement('div')
// var addHere = document.getElementById('addHere')
// addHere.appendChild(newDiv)
//
// // ------video 3 ------
//
// var newH1 = document.createElement('h1')
// var textHere = document.createTextNode('helloooooo!!')
// newDiv.appendChild(textHere)
//
// // --------video 4------
//
// newDiv.className = "addedClass"
//
// // ------video 5------
//
// var newImg = document.createElement('img')
// newImg.setAttribute('src', 'https://media.nbcdfw.com/images/652*367/winechoctaw.jpg')
// addHere.appendChild(newImg)

// ------------video 6---------



var userss = [
  {
    name: 'tugce',
    image: 'img/tugce.jpg'
  },
  {
    name:'evan',
    image:'img/evan.png'
  }
]


function addComment() {



   var name = document.getElementById('name').value
   var comment = document.getElementById('comment').value
   var x = name + " " + comment

   console.log(x)

   var text = document.createTextNode(comment)
   var newItem = document.createElement('h1')
   var text2 = document.createTextNode("Commented by " + name)
   var newItem2 = document.createElement('h2')
   var newImg = document.createElement('img')



   //---------------------------------------------------

   //create images if user have one,



     for(var i=0; i < userss.length; i++) {
       var isSuccess = false

          if( name.toLowerCase() == userss[i].name.toLowerCase()  ) {
            newImg.src = userss[i].image
            newImg.setAttribute('style', 'object-fit:cover;')
            console.log(userss[i].image + userss[i].name)
            isSuccess = true
            break
          }else {
            isSuccess = false
          }

      }
        if (isSuccess == false) {
          newImg.setAttribute('src','https://istartup.gov.hk/images/online_images/profile_picture/default.png')
        }

// --------------------------
   addHere.appendChild(newImg)
   newImg.width = '60'
   newImg.height = '60'

   newItem.appendChild(text)
   newItem2.appendChild(text2)
   document.getElementById('addHere').appendChild(newItem)
   document.getElementById('addHere').appendChild(newItem2)


   newItem.className = "newitemclass"
   newItem2.className = "newitemclass2"



 }
