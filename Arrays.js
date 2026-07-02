let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);


//strings are imutable and arrays are muatable 


console.log(arr[0]); // index of array og 0 = 1;

console.log(arr.toString());  // convert an array to string
console.log(arr.join(" and "));  // coma convert to and in string
arr.pop();  // delete last element of array
console.log(arr);
arr.push("orange");
console.log(arr);
// add last position of array




arr.shift(); // remove first element and return it
console.log(arr);

arr.unshift("red")  // same as push operation
console.log(arr);

delete arr[0]; // delete item , delete hone ke baad empty output ayaga kyu ki memory to allocate ki gai ha but value nhi ha 
console.log(arr);

// concat method  mearging arrays 
let a1 = [1,2,3,45,];
let a2 = [4,5,6,7];
let a3 = [0,9,8,7];

let result = a1.concat(a2,a3);
console.log(result);



//sort method = sort method is used to sort the array in ascending order by default
let arr1 = [5,9,1,3,2];
console.log(arr1.sort()); // by default sort method sort the array in ascending order but it is not working properly because it is sorting the array as string 
// to sort the array in ascending order we have to use compare function 
console.log(arr1.sort((a,b) => a-b)); // compare function for ascending order
console.log(arr1.sort((a,b) => b-a)); // compare function for descending order

//slice method = yak position se element ko delete ya insert karne ma help karta ha 
let a = [12,3,4,5];
let f =a.slice(1,3);
console.log(f);
// 0 → Apple
// 1 → Banana
// 2 → Mango
// 3 → Orange
// Start from index 1
// End before index 3