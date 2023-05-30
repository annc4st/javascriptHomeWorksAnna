/* Напишіть функцію sumSliceArray(arr, first, second), 

*/

function sumSliceArray(arr, first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
        console.log("Not a number");
        throw new Error("Not a number");
    } else if (first >= arr.length || second >= arr.length) {
        console.log("Index out of range");
        throw new RangeError("Index out of range");
    }
    return arr[first] + arr[second];
}
    
let aa = [2, 3, 5, 6, 14, 15];
console.log(sumSliceArray(aa, 'ss', 3));

try {
    let result = sumSliceArray(aa, 2, 3);
    console.log(result);
} catch (error) {
    console.log(error.message);
}
