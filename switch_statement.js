var readlineSync=require("readline-sync");
// var num=readlineSync.questionInt("enter number=")
// switch(num){
//     case 1:
//         console.log("frist")
//         break
//     case 2:
//         console.log("secound")
//         break
//     case 3:
//         console.log("third")
//         break
//     case 4:
//         console.log("fourth")
//     default:
//         console.log("my name is manvi")
// }



var name=readlineSync.question("enter crater=")
switch(name){
    case "a":
        console.log("yes i am a")
        break
    case "b":
        console.log("i am b")
        break
    case "c":
        console.log("i am c")
        break
    default:
        console.log("i am out of the game")
}