// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.

// let array = [5, 25, 89, 120, 36];

// array.push("javascript" , "python");
// console.log(array);

// array.unshift("html" , "css");
// console.log(array);

// array.pop();
// array.shift();
// console.log(array);

// array.splice()

// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

// let array = ["ფორთოხალი", "ბანანი", "მსხალი"];
// console.log(array.length);

// array.push("ვაშლი","ანანასი");
// console.log(array);
// array.unshift("საზამთრო");
// console.log(array.length);
// array.splice(3, 0, "მანგო");
// array.pop();
// array.shift();
// console.log(array.length);

// 3. მოცემულია მასივი:
// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let divided = array.map (item => item / 3);
// console.log(divided);
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

// 4.  მოცემულია მასივი:

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let filteredItems = array.filter(function(item) {
//     if (typeof item === "number"){
//     return item;}
// });
// console.log(filteredItems);
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები;

// 5.მოცემულია მასივი:

// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let filteredItems = languages.filter(function(item){
//     if(item.length > 3){
//         return item;
//     }
// }

// );
// console.log(filteredItems);
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

// 6. მოცემულია მასივი:
// let item = [12, 'google', 32, null, 'yahoo', 25];

// let newArray = item.map(function(x){
//     if(typeof x === "number"){
//         return Math.pow(x,2);
//     }
//     if(typeof x === "string"){
//         return x.toUpperCase();
//     }
//     return x;
// });
// console.log(newArray);

// შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

// 7. Მოცემულია მასივი:
//
// Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

// 8. მოცემულია სამი მასივი:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let arr4 = arr1.concat(arr2, arr3);

// console.log(arr4);

// Concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში

// 9.მოცემულია მასივი:
// let arr = [1, 2, 3, 4, 5];
// let y = 0;
// arr.forEach( (x) => {
//  y += x;

// });

// console.log(y);

// Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

// 10.მოცემულია მასივი:
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

// let filteredNumbers = numbers.filter((x) => {
//     return x > 0 ;
// })
// console.log(filteredNumbers);
// Filter მეთოდის საშუალებით ამოიღეთ მარტო დადებითი რიცხვები

// 11.შეამოწმეთ მოცელუმ მასივში let arr = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით
// let arr = [-1, -2, -3, 4];

// let positiveNumber = arr.some((x) => {
//     return x > 0;
// });

// console.log(positiveNumber);
