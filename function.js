// function myFunc(){

// }


// function fishTorkari(number){
//     console.log('kemon holo torkari ranna');
//     console.log(number);
// }
// fishTorkari(5);
// function getMenu() {
//     console.log("Burger, Pizza, Pasta");
//    }

//    getMenu();

// function myFunc(){
//     console.log('bosa theke oth')
//     console.log('amar sonar bangla')
// }
// let total = myFunc();

// console.log('kehkd kdjf')

// function fishTorkari(masala, fish, oil, vajitabol){
//     console.log('fish torkari ranna kori kemon holo janaben')
//     console.log('fish torkari ranna kori kemon holo janaben')
//     console.log('fish torkari ranna kori kemon holo janaben')

//     return "macher torkari postut";
// }
// let torkari = fishTorkari("holud", "ilis", "papor");
// console.log(torkari);

// function sum(x, y){
// const result = x + y;
// return result;
// }
// let total = sum(5, 4);
// console.log(total);

// function square (number){
//     const borgo = number * number;
// console.log(borgo);
// }
// square(4);
// square(20);
// square(10);
// square(500);

// function add (num1, num2){
// let sum = num1 + num2;
// console.log(sum);
// }
// add(20, 10);





// function evenNumber(num){
//     const eliment = [];
//     for(let number of numbers){
//         if(number % 2 === 0){
//             eliment.push(number)
//         }
        
//     }
//     console.log(`this is even number ${eliment}`)
// }

// let numbers = [20, 14, 58, 65, 45,58, 64];
// const avg = evenNumber(numbers);
// let friends = ['abul', 'kabul', 'cabul', 'abul', 'rasel', 'khalil', 'jubayer', 'khalil'];
// function names (name){
//     let uniqueName = [];
// for(let i = 0; i < friends.length; i++){
//     let eliment = friends[i];
//     if(uniqueName.includes(eliment) === false){
//         uniqueName.push(eliment)
//     }
// }
// return uniqueName;
// }

// let number = names(friends);
// console.log(number)


// function add (number){
//     const dubble = number * 2;
//     console.log(dubble, number)
// }
// add(41)

// function myFunction (fullName, age, dateOfBrith = 1990){
// console.log('Hello ' + fullName + " my age: " + age + " dateofbrith-" + dateOfBrith);
// }
// myFunction('rasel', 35)

// function isSubscribe (){
//     console.log('subscribed')
// }
// document.getElementById('btn').addEventListener('click', isSubscribe);

// function myFunc (x, y){
// return x * y;
// }
// console.log(myFunc(10, 20))

// let numbers = [20, 5, 4, 8, 9, 3, 5];
// let square = numbers.map(function(number){
//     return number * 2;
// })
// console.log(square)

// function difarence (num1, num2){
// const diff = num1 - num2;
// console.log(diff)
// }
// const fatherAge = 55;
// const myAge = 20;
// difarence(fatherAge, myAge)

// function myFunc (number){
//     const ga = number * 10;
//     return ga; 
// }
// console.log(myFunc(25));

// function myAge (numBer){
// const ha = numBer / 2;
// return ha;
// }
// console.log(myAge(30));


// function my (number, num){
//     const total = number + num;
//     return total;
// }
// let result = my(20, 25)


// function myFunc (num1, num2){
//     return num1 + num2;
// }
// let total = myFunc(58, 54);
// console.log(result, total);

// function myFunction (number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let result = myFunction(78);
// console.log(result); 

// function myFunction (str){
//     const size = str.length;
//     console.log(size);
//     if(size % 2 === 0){
//         console.log('this is a even number');
//         return true;
//     }
//     console.log('this is a odd number')
//     return false;
// }
// myFunction('Hello')
// myFunction('Hi')


// function myFunc (number, dubble){
//     if(dubble === true){
//         const result = number *2;
//         console.log(result);
//         return result;
//     }
//     else{
//         const result = number * 3;
//         console.log(result);
//         return result; 

//     }
// }
// let total = myFunc(20)
// let num = [25, 30, 10, 50, 40, 60, 20, 10]
// function myFunc (number){
//     const eliment = number.length;
//     return eliment;
// }
// const result = myFunc(num);
// console.log(result);


// let num = [25, 30, 10, 50, 40, 60, 20, 10]
// function my (numbers){
//     let sum = 0;
//     for(Number of numbers){
//         // console.log(Number)
//         sum = sum + Number;
//     }
//     return sum;
// }
// let total = my(num)
// console.log(total, 'number')



let numbers = [25, 10, 20, 65, 24, 585, 24, 20];
function myFunction (numbers){
    let sum = 0;
    for(Number of numbers){
        if(Number % 2 === 0){
            sum = sum + Number;
        }
    }
    return sum;
}
let result = myFunction(numbers);
console.log(result);