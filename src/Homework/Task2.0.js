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

function displayDelay(result) {
    let i = 0;

    function loop() {
        console.log(result[i]);
        i++;
        if (result[i] === undefined)
            return;
        else
            setTimeout(loop, 2000);
        console.log('...1 second delay');
    }
    loop();
}

let sumOfEqualsArrays = (array1,array2) =>  {
    let result = [];
    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            result.push(array1[i] + array2[i]);
        }
    }
    displayDelay(result);
};

let sumIfArray1IsBigger = (array1, array2) => {
    let result = [];
    if (array1.length > array2.length) {
        for (let i = 0; i < array2.length; i++) {
            result.push(array1[i] + array2[i]);
            if (i === array2.length-1) {
                for (; i < array1.length - 1; i ++ ) {
                    result.push(array1[i+1]);
                }
            }
        }
    }
    displayDelay(result);
};

let sumIfArray2IsBigger = (array1,array2) => {
    let result = [];
    if (array1.length < array2.length)
        for (let i = 0; i < array1.length; i++) {
            result.push(array1[i] + array2[i]);
        if (i === array1.length - 1) {
            for (; i < array2.length - 1; i++) {
                result.push(array2[i + 1]);
            }
        }
    }
    displayDelay(result);

};

let sum = (array1, array2) => {
    if(array1.length > array2.length) {
      sumIfArray1IsBigger(array1, array2);
    } else if (array2.length > array1.length) {
       sumIfArray2IsBigger(array1,array2);
    } else {
       sumOfEqualsArrays(array1, array2);
    }
};

array22 = [1,0,2,3,4];
array11 = [3,5,6,7,8,13];

sum(array11,array22);




