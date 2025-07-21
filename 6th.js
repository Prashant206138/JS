// Primitive 
//  7 type : string ,number,boolean,null,undefined,symbol,bigint.


/*const score = 100
const scorevalue = 100

const isloggedin = false
const outsidetemp = null
let useremail;

const id=symbol('1234')
const anotherid=symbol('1234')
console.log(id === anotherid);*/


// const bignumber=1234567890n




//refrence (non primitive)
//-> array,object,functions

const heros=["ben","spiderman","iron man","captain america"]//array
let myobj={
    name:"prashant",
    age: 20,

}//object
const myfunction=function(){
    console.log("Hello world");
    
}//function
console.log(typeof outsideTemp);

/*JavaScript is a dynamic language. This means that:

1)Dynamic Typing: Variables in JavaScript can hold values of any type, and the type can change during runtime. For example, a variable can be assigned a number and later be reassigned to a string without causing an error.
      let x = 5; // x is a number
          x = "Hello"; // Now x is a string
2)Dynamic Behavior: JavaScript allows for more flexibility during execution, such as modifying objects and adding properties or methods to them at runtime.
So, unlike static languages (like Java or C++), where variable types are defined at compile-time and must remain consistent, JavaScript is more flexible and operates dynamically during execution.*/



//* ****************************************************************** */
// stack memory(used in primitive).& heap memory (used in non primitive)
//example of stack memory
/*let myyoutubename="prashantbhusal"
let anothername=myyoutubename
anothername="chgaiaurcode"
console.log(anothername);
console.log(myyoutubename);*/


//example of heap
let user1={
    email: "prashant@123gmail.com"
    
}
let user2=user1
user2.email="bdsjiuew@12gmail.com"
console.log(user1.email);
console.log(user2.email);





