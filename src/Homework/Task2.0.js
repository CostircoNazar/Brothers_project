console.log('Task1 result--------------------------------------');

let array = [1, 2, 3, 4, 5, 7, 8, 9];
function binary_Search(array, arrayValue) {
    let mid = Math.floor(array.length/2);
        for(;array[mid] !== arrayValue;) {
           // mid = Math.floor(array.length/2);
            if (array[mid] > arrayValue) {
                let min = 0;
                mid = Math.floor((min + mid - 1)/2);
            }
            if(array[mid] < arrayValue) {
                let max = array.length - 1;
                mid = Math.floor(mid + 1 + max) / 2; // line 8 has ) in the end;
            }
        }
        return mid;
}

console.log(binary_Search(array, 1));
console.log(binary_Search(array, 5));

console.log('Task 2 result------------------------------------');
let sum = (array1, array2) => {
    let result = [];
    if (array1.length > array2.length) {
        for (let i = 0; i < array2.length; i++) {
            result.push(array1[i] + array2[i]);
            if (array2[i] === array2[array2.length-1]) {
                for (; i < array1.length - 1; i ++ ) {
                    result.push(array1[i+1]);
                }
            }
        }
    }
    if (array1.length < array2.length) {
        for (let i = 0; i < array1.length; i++) {
            result.push(array1[i] + array2[i]);
            if (array1[i] === array1[array1.length - 1]) {
                for (; i < array2.length - 1; i++) {
                    result.push(array2[i+1]);
                }
            }
        }
    } else {
        for (let i = 0; i < array1.length; i++ ) {
            result.push(array1[i] + array2[i]);
        }
    }
    return result;
};

array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

console.log(sum(array2, array2));


