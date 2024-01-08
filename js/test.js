

const test = (name) => {
    console.log('my name is' + name)
}

test('tanvir');

let arr = [1, 2, 3, 4, 5]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)

}
let newArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element ** 2)


}

console.log(newArr)
/* map */
let n_arr = arr.map((e) => {
    return e ** 2
})

console.log(n_arr)

//filter
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}

console.log(n_arr.filter(greaterThanSeven))


//promise
let prom = new Promise((resolve, reject) => {
    let rand = Math.random()

    if (rand < 0.5) {
        reject('Math random is not on your side');
    }
    else {
        setTimeout(() => {
            console.log('Tanvir');
            resolve('I am done')
        }, 1000);
    }

})

prom.then((a) => {
    console.log(a)
}
).catch((err) => {
    console.log(err)
}
);

//func - return
let num1 = 5;

let num2 = 5;

let add = (number1, number2) => number1 + number2; //if it returns a simple thing we can directly write like this

let x = add(num1, num2);

console.log(x);


//class
class Animal {
    constructor(name) {
        this.name = name
        console.log('created ');
    }

    eats() {
        console.log('Eating');

    }

    jumps() {
        console.log('jumping');
    }
}

let a = new Animal('Cat')
let b = a.name
let eat = a.eats()
console.log(a)
console.log(b);
console.log(eat);



