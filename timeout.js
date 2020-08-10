function showOutput(){
    console.log(111);
}
console.log(222);
// setTimeout(showOutput, 2000);
// setTimeout(function(){
//     console.log('lazy and waiting')
// }, 4000);
setInterval(function(){
     console.log('doing it')
}, 1000)

console.log(333);