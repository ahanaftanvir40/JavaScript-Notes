console.log('hello');

let boxes = document.getElementsByClassName('box');
console.log(boxes);


let arr = Array.from(boxes);

const getRandomcolor = () => {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

arr.forEach(element => {
    element.style.backgroundColor = getRandomcolor();

});

