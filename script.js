// //Advanced arrays

// const array = [1, 2, 10, 16];

// // forEach
// const double = [];
// const newArray = array.forEach( num => {
// 	double.push(num * 2);
// });

// console.log("forEach", double);

// // map 

// const mapArray = array.map( num => {
// 	return num * 2;
// });

// console.log("map", mapArray);

// // filter 
// const filterArray = array.filter(num => {
// 	return num > 5
// });
// console.log('filter', filterArray);

// // reduce 

// const reduceArray = array.reduce((accumulator, num) => {
// 	return accumulator + num;
// }, 5);

// console.log('reduce', reduceArray);


// // reference 
// var object1 = {value: 10};
// var object2 = object1;
// var object3 = {value: 10};

// // context vs scope 
// const object4 = {
// 	a: function() {
// 		console.log(this);
// 	}
// }


// //instanciation 
// class Player {
// 	constructor(name, type) {
// 		console.log('player', this);
// 		this.name = name;
// 		this.type = type;
// 	}
// 	introduce () {
// 		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// 	}
// }

// class Wizard extends Player {
// 	constructor(name, type){
// 		super(name, type)
// 		console.log('wizard', this);
// 	}
// 	play() {
// 		console.log(`WEEEEEEEEE I'm a ${this.type}`);
// 	}
// }

// const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shawn', 'Dark Magic')

// const square = (x) => x**2;
// const cube = (y) =>y**3;

// .padStart();
// .padEnd();

// const fun = (
// 				a, 
// 				b, 
// 				c, 
// 				d,
// 				e,
// 				) => {
// 	console.log(a);
// }

// fun(1, 2, 3, 4);

// Object.values
// Object.entries
// Object.keys

let obj = {
	username0 :'Santa',
	username1: 'Rudolf',
	username2: 'Mr. Grinch'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
});

Object.values(obj).forEach(value => {
	console.log(value);
});

Object.entries(obj).forEach(entries => {
	console.log(entries);
});

Object.entries(obj).map(value=> {
	return value[1] + value[0].replace('username','');
});
