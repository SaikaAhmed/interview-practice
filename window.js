const name = 'saika'; //global
function add(num1, num2){
    result = num1 + num2;
    // console.log('result inside', result);
    console.log('name inside', name);
    function double(num){
        return num * 2;
    }
    const total = double(result);
    return total;
    return result;
}
// console.log('result inside', result);
console.log('name inside', name);
const sum = add(10,20);
console.log(sum);
console.log("result outside", result);