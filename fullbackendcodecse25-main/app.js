//function in java script 
// console.log("hell");
// function hello()
// {
//     console.log("this is fumction");
// }
// hello();
// console.log("Synchroneous java script");
const hello=()=>
{
 console.log("aSynchronus function");
 setTimeout(()=>{
    console.log("A");
},2000);
}
hello();
console.log("Naman");