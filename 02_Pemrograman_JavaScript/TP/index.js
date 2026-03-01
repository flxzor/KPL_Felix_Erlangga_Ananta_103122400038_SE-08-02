const arr1 = [1, -2, 3, -4, 5, -6];
const arr2 = [2, 0, 26, 28, -2];
function mulOfArray(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i = i + 1) {
    //    if (arr[i] >= 0) {
       if (arr[i] > 0) {
           result = result * arr[i];
       }
    }
    
    return result;
}

const arr1Result = mulOfArray(arr1);
const arr2Result = mulOfArray(arr2);
// console.log(arr1Result);
console.log(arr2Result);