// 1. წინა დავალებიდან გადმოიტანეთ ფუნქცია getRandomNumber რომელიც იღებს a და b პარამეტრებს და აბრუნებს შემთხვევით რიცხვებს a-დან b-მდე


function getRandomNumber(a, b) {
	let randomNumber = Math.random() * (b - a) + a;
	let roundedRandomNum = Math.floor(randomNumber);

	return roundedRandomNum;
}

console.log("1. - ", getRandomNumber(5, 10));

// 2. დაწერეთ ფუნქცია, რომელიც მიიღებს ერთ პარამეტრს (n - ნატურალური რიცხვი) და დააბრუნებს n სიგრძის მასივს, რომელშიც იქნება 0-დან 100-მდე შემთხვევითი რიცხვები. შემთხვევითი რიცხვის მისაღებად გამოიყენეთ უკვე დაწერილი ფუნქცია getRandomNumber. ფუნქციის მიერ დაბრუნებული მასივი შეინახეთ ცვლადში randomNumbers
let randomNumbers = [];

function getRandomNumsArray(n) {
	
	if (n > 0) {

		for (let i = 0; i <= n; i++) {
			randomNumbers.push(getRandomNumber(0, 100));
		}

	} else {
		console.log("Number must be greather then 0");
	}
	

	return randomNumbers;
}

console.log("2. - ", getRandomNumsArray(12));


// 3. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს #2 ფუნქციის მიერ დაბრუნებულ მასივს randomNumbers, ამ მასივში იპოვის და დააბრუნებს უდიდეს რიცხვს.
// ამოხსნა 1
function getMaxNumber(array) {
	let maxNumber = Math.max(...array);
	return maxNumber;
};

// ამოხსნა 2
function getMaxNumber2(array) {
	let maxNumber = array[0];

	for(let i = 1; i < array.length-1; i++) {

		if(maxNumber < array[i]) {
			maxNumber = array[i];
		}
	}

	return maxNumber;
}

console.log("3. - ", "Max number in array is - ", getMaxNumber(randomNumbers));
console.log("3. - ", "Max number in array is - ", getMaxNumber2(randomNumbers));


// 4. დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა მასივი და აბრუნებს შეტრიალებულ მასივს. მაგალითად თუ პარამეტრად გადავცემთ [1, 2, 3] მასივს, უნდა დააბრუნოს [3, 2, 1] მასივი.

// ამოხსნა 1
function getRevercedArray(array) {
	let revercedArray = array.reverse();
	return revercedArray;
}

// ამოხსნა 2
function getRevercedArray2(array) {
	let revercedArray = [];

	for (let i = array.length-1; i >= 0 ; i--){
		revercedArray.push(array[i]);
	}

	return revercedArray;
}

console.log("4. - ", getRevercedArray(randomNumbers));
console.log("4. - ", getRevercedArray2(randomNumbers));


// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის მარტივი, ან false -ს თუ რიცხვი არ არის მარტივი. მარტივია რიცხვი, რომელიც მხოლოდ 1-ზე და თავისთავზე იყოფა. მარტივი რიცხვებია: 2, 3, 5, 7, 11 და ა.შ.

function isPrimeNumber(n) {
	let result;

	if (n > 0) {

		for (let i = 2; i < n; i++) {

			if (n % i == 0) {
				result = false;
				break;

			}else {
				result = true;
			}
		}

	} else {
		console.log("Number must be greather then 0");
	};
	
	return result;
}

console.log("5. - ", isPrimeNumber(23));
console.log("5. - ", isPrimeNumber(15));

// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს (a, b) და დააბრუნებს მასივს, რომელშიც მოქცეული იქნება a -დან b -მდე ყველა მარტივი რიცხვი. მაგალითად თუ პარამეტრად მიიღებს 0 -ს და 12 -ს უნდა დააბრუნოს [2,3,5,7,11]. მარტივი რიცხვის დასადგენად გამოიყენეთ #5 პუნქტში აღწერილი ფუნქცია.

function getPrimeNumsArray(a, b) {
	primeNumbers = [];

	for (let x = a; x <= b; x++) {

		if(isPrimeNumber(x)) {
			primeNumbers.push(x);
		}

	}

	return primeNumbers;
} 

console.log("6. - ", getPrimeNumsArray(5, 35));


// 7. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. (გაკეთებული გვაქვს #11 დავალებაში). შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).
let users = [
	{
		name: "Karol",
		age: 50
	},
	{
		name: "Maria",
		age: 26
	},
	{
		name: "John",
		age: 60
	},
	{
		name: "Agatha",
		age: 21
	},
	{
		name: "Richard",
		age: 45
	}

];

function getYangestPersonAge(users) {
	minAge = users[0].age;

	for(let i = 0; i < users.length; i++) {
		if(users[i].age < minAge) {
			minAge = users[i].age;
		}
	}
	return minAge;
}

console.log("7. - ", getYangestPersonAge(users));


// 8. შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს მასივის სახით ყველა ამ რიცხვის გამყოფს. მაგალითად თუ პარამეტრად მიიღებს რიცხვს 10 უნდა დააბრუნოს [1, 2, 5, 10]

function getNumberDivisors(n) {
	divisors = [];

	if(n > 0) {
		for (let i = 1; i <= n; i++) {

			if(n % i == 0) {
				divisors.push(i);
			}

		};	

	}else {
		console.log("Number must be greather then 0");
	}
	

	return divisors;
}

console.log("8. - ", getNumberDivisors(10));



// 9* დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ ნატურალურ რიცხვს და დააბრუნებს ამ რიცხვების უმცირეს საერთო ჯერადს (უსჯ). უმცირესი საერთო ჯერადი არის რიცხვი, რომელიც ორივე რიცხვზე იყოფა. მაგალითად 3 -ს და 4-ს უმცირესი საერთო ჯერადია - 12, ხოლო 6 -ის და 18 -ის უმცირესი საერთო ჯერადია 18.
// debugger
function getLeastCommonMultiple(a, b) {
	let leastCommonMultiple = 1;

	if(a > 0 && b > 0) {
		while(true) {

			if (leastCommonMultiple % a == 0 && leastCommonMultiple % b == 0) break;

			leastCommonMultiple++;
		}
	}else {
		console.log("Numbers must be greather then 0");
	}
	
	return leastCommonMultiple;
};

console.log("9. - ", getLeastCommonMultiple(3, 4));
console.log("9. - ", getLeastCommonMultiple(6, 18));


// 10* დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს 0 დან 100 მდე რიცხვს. ეს რიცხვი წარმოადგენს ფულის ერთეულს თეთრებში. ფუნქციამ უნდა დააბრუნოს მასივის სახით მონეტები, რომელთა გამოყენებითაც შეიძლება ამ რიცხვის მიღება. ფუნქციამ უნდა იპოვოს უმცირესი რაოდენობა მონეტებისა, ანუ გამოიყენოს რაც შეიძლება დიდი მონეტები. მონეტების ფასებია: 1, 2, 5, 10, 20, 50.  მაგალითად, თუ ფუნქცია მიიღებს პარამეტრად რიცხვს 72 მან უნდა დააბრუნოს შემდეგი მონეტები მასივის სახით: [ 50, 20, 2 ], ხოლო თუ პარამეტრად მიიღო რიცხვი 45 უნდა დააბრუნოს [ 20, 20, 5 ]

function getCoinArray(num) {
	coins = [50, 20, 10, 5, 2, 1]
	change = [];

	if (num >= 100 || num <= 0) {
		console.log("Number must be between 0 - 100")

	}else {

		let i = 0;

		while(num > 0) {

			if(num - coins[i] >= 0) {
				change.push(coins[i]);
				num -= coins[i];

			}else {

				i++;
			}
		}
	}

	return change;
}

console.log("10. - ", getCoinArray(72));
console.log("10. - ", getCoinArray(45));