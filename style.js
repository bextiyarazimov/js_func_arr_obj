

/////// #### Task 1: Function Basics////////////

// 1.1  Create a function named `greetUser` that takes a user's name as an argument and prints a personalized greeting.
/////// İstifadəçinin adını arqument kimi götürən və fərdi salamlamanı çap edən `greetUser` adlı funksiya yaradın.

// function greetUser(name) {
//     console.log(`Hello, ${name}! Welcome.`);
// }
// greetUser("Zaman");





// 1.2 Write a function `calculateArea` that calculates and returns the area of a rectangle. The function should take the length and width as parameters.
////  Düzbucaqlının sahəsini hesablayan və qaytaran `hesablayınArea` funksiyasını yazın. Funksiya uzunluq və eni parametr kimi qəbul etməlidir.

// function calculateArea(length, width) {
//     return length * width;
// }

// let area = calculateArea(2, 5);
// console.log("Area", area);





// 1.3 Implement a function `isEven` that checks if a given number is even. Return `true` if it is, otherwise `false`.

///  Verilmiş ədədin cüt olub-olmadığını yoxlayan “isEven” funksiyasını yerinə yetirin. Əgər belədirsə "doğru", əks halda "yanlış" qaytarın.

// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(3));  
// console.log(isEven(8)); 







////// #### Task 2: Array Manipulation
// 2.1 Create an array named `fruits` containing at least five different fruit names. Write a function `displayFruits` that prints each fruit in the array.
////    Ən azı beş müxtəlif meyvə adından ibarət “meyvələr” adlı massiv yaradın. Massivdəki hər bir meyvəni çap edən `displayFruits` funksiyasını yazın.


// let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// function displayFruits() {
//     for (let fruit of fruits) {
//         console.log(fruit);
//     }
// }

// displayFruits();



// 2.2 Implement a function `reverseArray` that reverses the elements of an array. Test it with both numeric and string arrays.

////   Massivin elementlərini tərsinə çevirən “reverseArray” funksiyasını yerinə yetirin. Onu həm ədədi, həm də sətir massivləri ilə sınayın.

// function reverseArray(arr) {
//     return arr.reverse();
// }

// // numeric array:
// let numericArray = [1, 2, 3, 4, 5];
// console.log(reverseArray(numericArray));

// // string array:
// let stringArray = ["one", "two", "three", "four", "five"];
// console.log(reverseArray(stringArray));




// 2.3 Write a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.
////   Rəqəmlər massivi götürən və yalnız cüt ədədlərdən ibarət yeni massiv qaytaran `filterEvenNumbers` funksiyasını yazın.

// function filterEvenNumbers(numbers) {
//     return numbers.filter(num => num % 2 === 0);
// }

// // Example usage:
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(filterEvenNumbers(numbersArray));







//////////////////   Task 3: Object and Methods////////////////
//3.1 Define an object `person` with properties `name`, `age`, and `city`. Write a function `displayPersonInfo` that prints the information in a readable format.
////  `ad`, `yaş` və `şəhər` xassələri olan `şəxs` obyektini təyin edin. Məlumatı oxuna bilən formatda çap edən `displayPersonInfo` funksiyasını yazın.

// let person = {
//     name: "John",
//     age: 25,
//     city: "New York"
// };


// function displayPersonInfo() {
//     console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
// }


// displayPersonInfo();


/////3.2 Extend the `person` object by adding a method `haveBirthday` that increments the age by 1 each time it's called.
//////// Hər dəfə çağırılanda yaşı 1 artıran `haveBirthday` metodu əlavə edərək `şəxs` obyektini genişləndirin.


// let person = {

//     age: 25,
// };

// function displayPersonInfo() {
//     console.log(`Age: ${person.age}`);
// }


// person.haveBirthday = function () {
//     this.age += 1;
// };

// // Test the method
// person.haveBirthday();
// displayPersonInfo();

