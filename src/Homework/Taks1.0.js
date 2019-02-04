
function is_array(arg) {
	return !!Array.isArray(arg);
}
console.log(' output function is_array----------------------------------');
console.log(is_array('My name is Nazar'));
console.log(is_array([1, 2, 4, 0]));


function array_Clone(array) {
	return Array.from(array)
}
console.log(' output function array_Clone----------------------------------');
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


function first(arr, n) {
	if (arguments.length === 0)
		console.log('Zero arguments passed');
	if (arr == null) 
		return [];
	if (n == null)
		return arr[0];
	if (n < 0)
		return [];
	return arr.slice(0,n)
}
console.log(' output function first----------------------------------');

console.log(first([7, 9, 0, 2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
console.log(first());

function last(arr, n) {
    if (arguments.length === 0)
		console.log('Zero arguments passed');
	if (arr == null) 
		return [];
	if (n == null)
		return arr[arr.length - 1];
	return arr.slice(-n)
}
console.log(' output function last----------------------------------');

console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
console.log(last([7, 9, 0, -2]));

myColor = ["Red", "Green", "White", "Black"];

console.log(' output function myColor ----------------------------------');
console.log(myColor.toString());
console.log(myColor.join(','));
console.log(myColor.join('+'));

const arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function(a,b) {
	return a-b
});
console.log(arr1);

console.log('--------------------------------------------');

const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let counter = 0;
let countable = [];

for (let i = 0, j = i+1; i < arr2.length; i++) {
		if (arr2[i] === arr2[j]) {
			counter += 1;
			countable += arr2[i]
	    }
}
console.log(`${countable[0]} (${counter} times) `);

console.log('--------------------------------------------');

const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let i = 0; i < a.length; i++) {
	console.log(`"row ${i}"`);
	for(let j = a[i], k = 0; k < j.length; k++) {
		console.log(`"${j[k]}"`)
	}
}

 

 function ch(str) {
 	let s = '';
 	for(let i = 0; i < str.length; i++) {
 		if(str[i] === str[i].toUpperCase()) {
 			s += str[i].toLowerCase()
 		} else {
 			s += str[i].toUpperCase()
 		}
 	}
 	console.log(s)
 }
ch('The Quick Brown Fox');


function setDashes(num) {
	let result = '';
	let str =  num.toString();
	for ( let i = 0; i < str.length; i++ ) {
		if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) 
			result += str[i] + '-'; 
		else
		result += str[i]
    }

	console.log(result)
}

setDashes(245);